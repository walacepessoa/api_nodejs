const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');

<<<<<<< HEAD
// Importando modelos
const Cliente = require('./models/cliente');
const Produto = require('./models/produto');
const Compra = require('./models/compra');

// Importando rotas
const clientesRoute = require('./routes/clientes');
const produtosRoute = require('./routes/produtos');
const comprasRoute = require('./routes/compras');

const app = express();
app.use(bodyParser.json());

// Associando as rotas
app.use('/clientes', clientesRoute);
app.use('/produtos', produtosRoute);
app.use('/compras', comprasRoute);

// Definindo relacionamentos (foreign keys)
Compra.belongsTo(Cliente, { foreignKey: 'cliente_id' });
Compra.belongsTo(Produto, { foreignKey: 'produto_id' });

// Cria o banco de dados e inicia o servidor
sequelize.sync().then(() => {
  console.log('📦 Banco de dados sincronizado');

  app.listen(3000, () => {
    console.log('🚀 Servidor rodando em: http://localhost:3000');
  });
}).catch(err => {
  console.error('❌ Erro ao conectar com o banco de dados:', err);
=======
const app = express();
app.use(bodyParser.json());

// Rotas
app.use('/clientes', require('./routes/clientes'));
app.use('/produtos', require('./routes/produtos'));
app.use('/compras', require('./routes/compras'));

//Json tabela clientes
sequelize.sync().then(async () => {

const Cliente = require('./models/cliente');

const [cliente, created] = await Cliente.findOrCreate({
    where: { email: 'walacepessoa@gmail.com' },
    defaults: {
      nome: 'Walace Pessoa',
      senha: '1000'
    }
});

  app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
  });
});

//Json tabela produtos
const Produto = require('./models/produto');

sequelize.sync().then(async () => {
  await Produto.findOrCreate({
    where: { nome: 'Plano AB' },
    defaults: {
      descricao: 'Plano com desconto de 10%',
      preco: 150
    }
  });

  app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
  });
});

//Json tabela compras
const Compra = require('./models/compra');

sequelize.sync().then(async () => {
  await Compra.create({
    cliente_id: 1,
    produto_id: 1,
  });

  app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
  });
});

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
  });
>>>>>>> b8afa02fe945322222b46ca329bcca3258925d1d
});