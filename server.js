const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

// Simulação de persistência em memória
let usuarios = [];
let proximoId = 1;

// POST - Cadastrar usuário
app.post('/api/usuarios', (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({
            error: 'Os campos nome e email são obrigatórios.'
        });
    }

    const novoUsuario = {
        id: proximoId++,
        nome,
        email
    };

    usuarios.push(novoUsuario);

    return res.status(201).json(novoUsuario);
});

// GET - Listar todos os usuários
app.get('/api/usuarios', (req, res) => {
    return res.status(200).json(usuarios);
});

// GET - Buscar usuário por ID
app.get('/api/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);
    const usuario = usuarios.find(usuario => usuario.id === id);

    if (!usuario) {
        return res.status(404).json({
            error: 'Usuário não encontrado'
        });
    }

    return res.status(200).json(usuario);
});

// PUT - Atualizar usuário
app.put('/api/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = usuarios.findIndex(usuario => usuario.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: 'Usuário não encontrado'
        });
    }

    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({
            error: 'Os campos nome e email são obrigatórios.'
        });
    }

    usuarios[index] = {
        id,
        nome,
        email
    };

    return res.status(200).json(usuarios[index]);
});

// DELETE - Remover usuário
app.delete('/api/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = usuarios.findIndex(usuario => usuario.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: 'Usuário não encontrado'
        });
    }

    usuarios.splice(index, 1);

    return res.status(204).send();
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
