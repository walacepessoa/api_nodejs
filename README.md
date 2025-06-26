API node js
----------
<p>
📌 Projeto: api-rest<br/>
Descrição:<br/>
API REST desenvolvida em Node.js que disponibiliza dados de clientes, produtos e compras via endpoints RESTful. Ideal para integração com aplicações frontend e serviços externos, fornecendo dados estruturados em JSON.<br/>
<br/>
🚀 Tecnologias utilizadas<br/>
<br/>
Node.js<br/>
Express.js<br/>
JSON<br/>
Git<br/>
VS Code<br/>
</p>
<p>
<h4>✅ Instalação, configuração e execução:</h4>
</p>
<p>
1. Instalar o Node.js<br/>
🔗 Baixe e instale:<br/>
Acesse: https://nodejs.org<br/>
Baixe a versão LTS (recomendada).<br/>
Instale normalmente (next, next, install...).<br/>
</p>
<p>
2. Instalar o Visual Studio Code<br/>
Baixe em: https://code.visualstudio.com<br/>
Instale e abra o Visual Studio Code.<br/>
</p>
<p>
3. Configurar o terminal com Git Bash (opcional, mas útil)<br/>
🔧 Passos:<br/>
Instale o Git: https://git-scm.com/downloads<br/>
No Visual Studio Code, vá em:<br/>
Terminal > Novo Terminal<br/>
Clique na setinha ao lado do + e selecione Git Bash.<br/>
</p>
<p>
💡 Dica:<br/>
Você pode definir o Git Bash como terminal padrão:<br/>
Ctrl+Shift+P → “Terminal: Select Default Profile” → escolha Git Bash.<br/>
</p>
<p>
🔍 Verifique a instalação:<br/>
No Visual Studio Code, vá em:<br/>
Terminal > Novo Terminal<br/>
Abra o terminal (Visual Studio Code ou Git Bash) e digite:<br/>
node -v<br/>
npm -v<br/>
</p>
<p>
4. Criar um projeto Node.js<br/>
No terminal:<br/>
mkdir meu-projeto<br/>
cd meu-projeto<br/>
npm init -y<br/>
</p>
<p>
5. Instalar os pacotes Express, sequelize e também o driver do banco SQLite:
npm install express sequelize sqlite3 body-parser<br/>
</p>

### Banco de dados SQLite

<p>
6. Como instalar a extensão REST Client no Visual Studio Code.<br/>
🔹 1. Abrir o Visual Studio Code<br/>
🔹 2. Ir até o menu de extensões: <br/>
Clique no ícone de quadrado com 4 blocos na barra lateral esquerda ou pressione Ctrl+Shift+X.<br/>
🔹 3. Buscar pela extensão<br/>
Digite no campo de busca:<br/>
REST Client<br/>
Ela aparecerá com o autor "Huachao Mao".<br/>
🔹 4. Clique em Instalar<br/>
Aguarde a instalação.<br/>
</p>
<p>
7. Criar o arquivo testes.http que irá criar os dados no banco de dados.<br/>

testes.http<br/>

### ✅ Criar cliente</p>

POST http://localhost:3000/clientes<br/>
Content-Type: application/json<br/>

{<br/>
  "nome": "Maria Oliveira",<br/>
  "email": "maria@email.com",<br/>
  "senha": "senha123"<br/>
}<br/>

### 🔍 Listar clientes
GET http://localhost:3000/clientes

###

### ✅ Criar produto
POST http://localhost:3000/produtos<br/>
Content-Type: application/json<br/>

{<br/>
  "nome": "Mouse Gamer",<br/>
  "descricao": "Mouse com sensor óptico e iluminação RGB",<br/>
  "preco": 150.00<br/>
}<br/>

### 🔍 Listar produtos
GET http://localhost:3000/produtos

###

### ✅ Criar compra (verifique os IDs antes)
POST http://localhost:3000/compras<br/>
Content-Type: application/json<br/>

{<br/>
  "cliente_id": 1,<br/>
  "produto_id": 1<br/>
}<br/>

### 🔍 Listar todas as compras
GET http://localhost:3000/compras

### 🔍 Listar compras de um cliente específico
GET http://localhost:3000/compras?cliente_id=1

### 🔍 Filtrar produtos por preço (entre R$100 e R$200)
GET http://localhost:3000/produtos?preco_min=100&preco_max=200
</p>
<p>
8. Como usar o REST Client<br/>
Abra o testes.http arquivo no Visual Studio Code.<br/>
Clique em "Send Request" acima de cada requisição para incluir os dados.<br/>
</p>
<p>
9. Iniciar o servidor:<br/>

node server.js
</p>
<p>
10. A URL base da API:<br/>
http://localhost:3000<br/>
</p>
<p>
📁 Estrutura de arquivos do projeto<br/>
</p>
<p>
api-rest/<br/>
│<br/>
├── models/                  ← Modelos Sequelize (definem as tabelas)<br/>
│   ├── cliente.js           ← Modelo Cliente<br/>
│   ├── produto.js           ← Modelo Produto<br/>
│   └── compra.js            ← Modelo Compra<br/>
├── routes/                  ← Rotas da API<br/>
│   ├── clientes.js          ← Endpoints /clientes<br/>
│   ├── produtos.js          ← Endpoints /produtos<br/>
│   └── compras.js           ← Endpoints /compras<br/>
├── database.js              ← Conexão com o SQLite usando Sequelize<br/>
├── server.js                ← Arquivo principal que sobe a API<br/>
├── testes.http              ← Arquivo post para indlusão dos dados no banco<br/>
├── package.json             ← Configuração do projeto e dependências<br/>
├── package-lock.json        ← (Gerado automaticamente pelo npm)<br/>
└── database.sqlite          ← (Gerado automaticamente pelo Sequelize)<br/>
</p>

### Criado por:<br/>
Walace Pessôa<br/>
Rio de Janeiro, Brasil<br/>
V01.01.00
