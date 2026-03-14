# CRUD Node.js

Aplicação backend desenvolvida durante estudos do módulo de **Node.js** do programa SCTEC, abordando conceitos de gerenciamento de pacotes, criação de servidores web, integração com banco de dados e implementação de operações CRUD.

O projeto utiliza **Express.js** para criação do servidor, **Sequelize** como ORM para comunicação com o banco de dados **MySQL**, e **Pug** como template engine para renderização das páginas.

Além do CRUD de clientes, o projeto também inclui um exemplo simples de **autenticação de usuários**.

---

# 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- Sequelize
- MySQL
- TypeScript
- Pug (Template Engine)
- Bootstrap

---

# 📚 Objetivo do Projeto

Este projeto foi desenvolvido como parte de um módulo de aprendizado em desenvolvimento backend com **Node.js**.

Durante o desenvolvimento foram explorados conceitos como:

- Gerenciamento de dependências com **npm**
- Uso de módulos e **CommonJS**
- Criação de servidores com **Express**
- Conexão com banco de dados
- Utilização de **ORM com Sequelize**
- Estruturação de aplicações utilizando **Controllers, Models e Routes**
- Renderização de páginas com **Pug**
- Implementação de **autenticação básica**
- Tratamento de erros
- Construção de operações **CRUD**

---

# ⚙️ Funcionalidades

## Clientes

- Criar clientes
- Listar clientes
- Visualizar cliente por ID
- Editar clientes
- Excluir clientes

## Usuários

- Login de usuários
- Autenticação básica

---

# 📁 Estrutura do Projeto

Estrutura simplificada das principais pastas e arquivos:

controller
model
router
views
app.ts
db.ts

Descrição das camadas:

- **Controller** → lógica da aplicação e manipulação das requisições
- **Model** → definição das tabelas e interação com o banco de dados
- **Router** → definição das rotas da aplicação
- **Views** → páginas renderizadas com Pug
- **app.ts** → arquivo principal da aplicação
- **db.ts** → configuração da conexão com o banco de dados

---

# 🔗 Rotas da Aplicação

## Clientes

GET / → Lista todos os clientes
GET /create → Página de criação de cliente
POST /create → Salva um novo cliente
GET /edit/:id → Página para editar cliente
POST /edit/:id → Atualiza os dados do cliente
GET /:id → Exibe um cliente específico
GET /del/:id → Remove um cliente

## Usuários

GET /login → Página de login
POST /login → Autenticação do usuário

---

# ▶️ Como Executar o Projeto

Clone o repositório:

git clone https://github.com/seu-usuario/crud-nodejs.git

Entre na pasta do projeto:

cd crud-nodejs

Instale as dependências:

npm install

Configure as variáveis de ambiente criando um arquivo `.env`.

Depois execute o projeto:

npm start

O servidor iniciará em:

http://localhost:3000

---

# 🗄️ Configuração do Banco de Dados

O projeto utiliza **MySQL**.

A conexão com o banco é configurada através de variáveis de ambiente no arquivo `.env`.

Exemplo:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=crud_nodejs

---

# 📖 Aprendizados

Este projeto permitiu praticar:

- Estruturação de aplicações backend
- Integração com banco de dados relacional
- Uso de ORM
- Implementação de CRUD
- Organização de código em camadas
- Criação de rotas e controllers no Express

---

# 👨‍💻 Autor

**Daniel Félix**

LinkedIn:  
https://www.linkedin.com/in/daniel-felix-developer/
