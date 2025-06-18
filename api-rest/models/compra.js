const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Compra = sequelize.define('Compra', {
  cliente_id: DataTypes.INTEGER,
  produto_id: DataTypes.INTEGER
});

module.exports = Compra;