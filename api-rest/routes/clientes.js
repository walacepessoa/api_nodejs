const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente');

router.post('/', async (req, res) => {
  const cliente = await Cliente.create(req.body);
  res.json(cliente);
});

router.get('/', async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
});

module.exports = router;