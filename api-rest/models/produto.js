const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Produto = sequelize.define('Produto', {
  nome: DataTypes.STRING,
  descricao: DataTypes.STRING,
  preco: DataTypes.FLOAT,
});

module.exports = Produto;