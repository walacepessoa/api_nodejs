const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');

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
    console.log('Servidor rodando em: http://localhost:3000');
  });
});


sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
  });
});

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});
