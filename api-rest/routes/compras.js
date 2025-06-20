const express = require('express');
const router = express.Router();
const Compra = require('../models/compra');

router.post('/', async (req, res) => {
  const compra = await Compra.create(req.body);
  res.json(compra);
});

router.get('/', async (req, res) => {
  const { cliente_id } = req.query;
  const where = {};
  if (cliente_id) where.cliente_id = cliente_id;

  const compras = await Compra.findAll({ where });
  res.json(compras);
});

module.exports = router;