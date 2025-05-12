# API Rest de Fichas de Personagens de RPG

Este projeto é uma API REST básica, construída com Node.js, Express e MongoDB (via Mongoose), onde é possível cadastrar, consultar e deletar Raças, Classes e Personagens de RPG.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (v14 ou superior recomendado)
- [MongoDB](https://www.mongodb.com/) local ou em nuvem

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://seu-repo-aqui.git](https://github.com/jvmoura/rpg-character-sheet)
cd rest-api
npm install
```

## Conexão

A URI de um banco no Mongo, feito exclusivamente para esse projeto, já foi deixada no código para facilitar


## Scripts

- `npm run dev`: Inicia a API em modo de desenvolvimento com nodemon
- `npm run serve`: Inicia a API normalmente com node

## Uso

Com o servidor rodando, acesse os endpoints via `http://localhost:3000`

Exemplo:

```bash
http://localhost:3000/api/characters
curl http://localhost:3000/api/roles
curl http://localhost:3000/api/races
```

## Estrutura do Projeto

Os arquivos foram separados em pastas de Controller, Models e Routes.

##Testes Postman

As requisições do postman estão em um arquivo dentro do projeto.
