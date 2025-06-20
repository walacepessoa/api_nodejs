Descrição:
----------
Projeto de criação de uma api rest em node js com Visual Studio Code.

Instalação, configuração e execução:
------------------------------------

1. Instalar o Node.js
🔗 Baixe e instale:
Acesse: https://nodejs.org
Baixe a versão LTS (recomendada).
Instale normalmente (next, next, install...).

🔍 Verifique a instalação:
No Visual Studio Code, vá em:
Terminal > Novo Terminal

Abra o terminal (Visual Studio Code ou Git Bash) e digite:
node -v
npm -v

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

4. Criar um projeto Node.js
No terminal:

mkdir meu-projeto
cd meu-projeto
npm init -y

Cria um package.json básico.

5. Instalar os pacotes Express, sequelize e também o driver do banco SQLite:
npm install express sequelize sqlite3 body-parser

6. Iniciar o servidor:
node server.js

7. A URL base da API:
http://localhost:3000

8. Estrutura do projeto no Visual Studio Code:
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
├── package.json             ← Configuração do projeto e dependências
├── package-lock.json        ← (Gerado automaticamente pelo npm)
└── database.sqlite          ← (Gerado automaticamente pelo Sequelize)

Criado por:
-----------
Walace Pessôa
Rio de Janeiro, Brasil
V01.01.00
