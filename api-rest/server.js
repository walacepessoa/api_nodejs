const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');

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
});