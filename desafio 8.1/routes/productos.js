const express = require('express');
const router = express.Router();
const products = require('../api/Products');

router.get('/', async (req, res) => {
  const result = await products.getItems();
  res.json(result);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const result = await products.getItemById(id);

  res.json(result);
});

router.post('/', async (req, res) => {
  if (
    req.body.title !== undefined &&
    req.body.price !== undefined &&
    req.body.thumbnail !== undefined
  ) {
    const item = req.body;
    const result = await products.addItem(item);
    res.status(200).json(result);
  }
});

router.put('/:id', async (req, res) => {
  if (
    req.body.title !== undefined &&
    req.body.price !== undefined &&
    req.body.thumbnail !== undefined
  ) {
    const itemUpdated = req.body;
    const result = await products.updateItemById(
      itemUpdated,
      parseInt(req.params.id)
    );
    res.json(result);
  }
});

router.delete('/:id', async (req, res) => {
  const result = await products.deleteItemById(parseInt(req.params.id));
  res.send('Item eliminado');
});

module.exports = router;
