const express = require('express');
const router = express.Router();
const Produto = require('../models/produto');
const { Op } = require('sequelize');

router.post('/', async (req, res) => {
  const produto = await Produto.create(req.body);
  res.json(produto);
});

router.get('/', async (req, res) => {
  const { preco_min, preco_max } = req.query;
  const where = {};

  if (preco_min || preco_max) {
    where.preco = {};
    if (preco_min) where.preco[Op.gte] = parseFloat(preco_min);
    if (preco_max) where.preco[Op.lte] = parseFloat(preco_max);
  }

  const produtos = await Produto.findAll({ where });
  res.json(produtos);
});

module.exports = router;