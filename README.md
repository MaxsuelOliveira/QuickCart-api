# 🧺 Cesta produtos com SQLite (Node.js)

Projeto simples e modular de um sistema de CESTA/CARRINHO onde **cada usuário possui uma UUID única** que identifica seus itens adicionados. Usando `Node.js`, `Express` e `SQLite` para uma API REST limpa, leve e sem dependências externas pesadas.

---

## 🚀 Funcionalidades

- [x] Criar e gerenciar uma cesta por `uuid_usuario`
- [x] Adicionar item à cesta
- [x] Listar todos os itens da cesta
- [x] Atualizar um item da cesta
- [x] Remover um item específico
- [x] Esvaziar toda a cesta

---

## 🧱 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [SQLite3](https://www.sqlite.org/index.html)
- [UUID](https://www.npmjs.com/package/uuid)

---

## 📁 Estrutura do Projeto

    cesta-crud/
    ├── db/
    │ └── database.js # Inicializa o banco e tabelas
    ├── models/
    │ ├── usuario.model.js # Gerencia usuários (uuid)
    │ └── cesta.model.js # CRUD dos itens da cesta
    ├── controllers/
    │ └── cesta.controller.js # Lógica das rotas
    ├── routes/
    │ └── cesta.routes.js # Rotas da API REST
    ├── server.js # Ponto de entrada da API
    ├── package.json
    └── README.md

---

## 🛠️ Instalação

```bash
# Clone o projeto
git clone https://github.com/seu-usuario/cesta-crud.git
cd cesta-crud

# Instale as dependências
npm install

# Inicie o servidor
node server.js
A API irá rodar em: http://localhost:3020
```

## 📌 Rotas da API

### ➕ Adicionar item à cesta

POST /cesta/:uuid/adicionar

``` json
{
  "produto": "Feijão",
  "quantidade": 2,
  "valor_unitario": 7.99
}`
```

### 📥 Listar itens da cesta

GET /cesta/:uuid

```json
{
  "produto": "Feijão Preto",
  "quantidade": 3,
  "valor_unitario": 8.49
}
```

### ✏️ Atualizar item

PUT /cesta/:uuid/:id

``` json
{
  "produto": "Feijão Preto",
  "quantidade": 3,
  "valor_unitario": 8.49
}
```

### ❌ Remover item específico

DELETE /cesta/:uuid/:id

### 🧹 Esvaziar toda a cesta

DELETE /cesta/:uuid

## 🧪 Exemplo de Teste com cURL

### Adicionar item

curl -X POST http://localhost:3020/cesta/uuid123/adicionar \
  -H "Content-Type: application/json" \
  -d '{"produto":"Arroz","quantidade":1,"valor_unitario":5.99}'

### Listar cesta

curl http://localhost:3020/cesta/uuid123