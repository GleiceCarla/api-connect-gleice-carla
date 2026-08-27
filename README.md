# API Connect - Usuários

## Objetivo

A API Connect é uma API REST desenvolvida para realizar o cadastro e gerenciamento de usuários. Os dados são armazenados temporariamente em memória durante a execução do servidor.

## Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- JSON
- Git e GitHub

## Como executar o projeto

1. Clone o repositório:

    git clone https://github.com/GleiceCarla/api-connect-gleice-carla.git

2. Acesse a pasta:

    cd api-connect-gleice-carla

3. Instale as dependências:

    npm install

4. Inicie o servidor:

    npm start

## Endpoints

| Método | Endpoint | Descrição | Status de sucesso |
|---|---|---|---|
| POST | `/api/usuarios` | Cadastra um novo usuário | 201 Created |
| GET | `/api/usuarios` | Lista todos os usuários | 200 OK |
| GET | `/api/usuarios/:id` | Busca um usuário pelo ID | 200 OK |
| PUT | `/api/usuarios/:id` | Atualiza um usuário | 200 OK |
| DELETE | `/api/usuarios/:id` | Remove um usuário | 204 No Content |

## Exemplo de cadastro

POST `/api/usuarios`

```json
{
  "nome": "Gleice Carla",
  "email": "gleicemendescarla@gmail.com"
}
```

Em caso de sucesso, a API retorna o status **201 Created**.

## Exemplo de atualização

PUT `/api/usuarios/1`

```json
{
  "nome": "Gleice Carla",
  "email": "gleicemendescarla@gmail.com"
}
```

Em caso de sucesso, a API retorna o status **200 OK**.

## Exemplo de remoção

DELETE `/api/usuarios/1`

Em caso de sucesso, a API retorna o status **204 No Content**.

## Validação

Os campos `nome` e `email` são obrigatórios nas operações de cadastro e atualização. Caso algum deles não seja informado, a API retorna **400 Bad Request**.

Ao buscar, atualizar ou remover um ID inexistente, a API retorna **404 Not Found**.

## Persistência

Os usuários são armazenados em memória. Portanto, os dados são apagados quando o servidor é reiniciado.
