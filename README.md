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

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/api/usuarios` | Cadastra um novo usuário |
| GET | `/api/usuarios` | Lista todos os usuários |
| GET | `/api/usuarios/:id` | Busca um usuário pelo ID |

## Exemplo de cadastro

POST `/api/usuarios`

{
  "nome": "Gleice Carla",
  "email": "gleicemendescarla@gmail.com"
}

Em caso de sucesso, a API retorna o status **201 Created**.

## Validação

Os campos `nome` e `email` são obrigatórios. Caso algum deles não seja informado, a API retorna **400 Bad Request**.

Ao buscar um ID inexistente, a API retorna **404 Not Found**.

## Persistência

Os usuários são armazenados em memória. Portanto, os dados são apagados quando o servidor é reiniciado.
