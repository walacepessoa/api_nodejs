API node js
----------
API REST desenvolvida em node js,
Projeto de criação de uma api rest em node js com Visual Studio Code.

Instalação, configuração e execução:
------------------------------------

1. Instalar o Node.js
🔗 Baixe e instale:
Acesse: https://nodejs.org
Baixe a versão LTS (recomendada).
Instale normalmente (next, next, install...).

2. Instalar o Visual Studio Code
Baixe em: https://code.visualstudio.com
Instale e abra o Visual Studio Code.

3. Configurar o terminal com Git Bash (opcional, mas útil)
🔧 Passos:
Instale o Git: https://git-scm.com/downloads
No Visual Studio Code, vá em:
Terminal > Novo Terminal
Clique na setinha ao lado do + e selecione Git Bash.

💡 Dica:
Você pode definir o Git Bash como terminal padrão:
Ctrl+Shift+P → “Terminal: Select Default Profile” → escolha Git Bash.

🔍 Verifique a instalação:
No Visual Studio Code, vá em:
Terminal > Novo Terminal

Abra o terminal (Visual Studio Code ou Git Bash) e digite:
node -v
npm -v

4. Criar um projeto Node.js
No terminal:

mkdir meu-projeto
cd meu-projeto
npm init -y

Cria um package.json básico.

5. Instalar os pacotes Express, sequelize e também o driver do banco SQLite:
npm install express sequelize sqlite3 body-parser

Banco de dados sqlite
--------------
6. Como instalar a extensão REST Client no Visual Studio Code.
🔹 1. Abrir o Visual Studio Code
🔹 2. Ir até o menu de extensões
Clique no ícone de quadrado com 4 blocos na barra lateral esquerda
ou pressione Ctrl+Shift+X.
🔹 3. Buscar pela extensão
Digite no campo de busca:
REST Client
Ela aparecerá com o autor "Huachao Mao".
🔹 4. Clique em Instalar
Aguarde a instalação.

7. Criar o arquivo testes.http que irá criar os dados no banco de dados.
testes.http
-----------
### ✅ Criar cliente
POST http://localhost:3000/clientes
Content-Type: application/json

{
  "nome": "Maria Oliveira",
  "email": "maria@email.com",
  "senha": "senha123"
}

### 🔍 Listar clientes
GET http://localhost:3000/clientes

###

### ✅ Criar produto
POST http://localhost:3000/produtos
Content-Type: application/json

{
  "nome": "Mouse Gamer",
  "descricao": "Mouse com sensor óptico e iluminação RGB",
  "preco": 150.00
}

### 🔍 Listar produtos
GET http://localhost:3000/produtos

###

### ✅ Criar compra (verifique os IDs antes)
POST http://localhost:3000/compras
Content-Type: application/json

{
  "cliente_id": 1,
  "produto_id": 1
}

### 🔍 Listar todas as compras
GET http://localhost:3000/compras

### 🔍 Listar compras de um cliente específico
GET http://localhost:3000/compras?cliente_id=1

### 🔍 Filtrar produtos por preço (entre R$100 e R$200)
GET http://localhost:3000/produtos?preco_min=100&preco_max=200

8. Como usar o REST Client
Abra o testes.http arquivo no Visual Studio Code.
Clique em "Send Request" acima de cada requisição para incluir os dados.

9. Iniciar o servidor:
node server.js

10. A URL base da API:
http://localhost:3000

11. Estrutura do projeto
api-rest/
│
├── models/                  ← Modelos Sequelize (definem as tabelas)
│   ├── cliente.js           ← Modelo Cliente
│   ├── produto.js           ← Modelo Produto
│   └── compra.js            ← Modelo Compra
│
├── routes/                  ← Rotas da API
│   ├── clientes.js          ← Endpoints /clientes
│   ├── produtos.js          ← Endpoints /produtos
│   └── compras.js           ← Endpoints /compras
│
├── database.js              ← Conexão com o SQLite usando Sequelize
├── server.js                ← Arquivo principal que sobe a API
├── testes.http              ← Arquivo post para indlusão dos dados no banco
├── package.json             ← Configuração do projeto e dependências
├── package-lock.json        ← (Gerado automaticamente pelo npm)
└── database.sqlite          ← (Gerado automaticamente pelo Sequelize)


Criado por:
-----------
Walace Pessôa
Rio de Janeiro, Brasil
V01.01.00
