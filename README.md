# REST API Node.js com Express e MongoDB

Este projeto é uma API REST básica construída com Node.js, Express e MongoDB (via Mongoose).

## Pré-requisitos

- [Node.js](https://nodejs.org/) (v14 ou superior recomendado)
- [MongoDB](https://www.mongodb.com/) local ou em nuvem

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://seu-repo-aqui.git
cd rest-api
npm install
```

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz com a string de conexão do MongoDB:

```env
MONGODB_URI=mongodb://localhost:27017/nome-do-banco
```

> **Nota:** Verifique no código se há uma variável `MONGODB_URI` sendo usada para configurar a conexão.

## Scripts

- `npm run dev`: Inicia a API em modo de desenvolvimento com nodemon
- `npm run serve`: Inicia a API normalmente com node

## Uso

Com o servidor rodando, acesse os endpoints via `http://localhost:3000` (ou a porta definida).

Exemplo:

```bash
curl http://localhost:3000/api/usuarios
```

## Estrutura do Projeto

```
rest-api/
├── index.js            # Ponto de entrada da API
├── package.json        # Definições e dependências
├── jsconfig.json       # Configuração do editor
└── ...
```

## Licença

ISC
