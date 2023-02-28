const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController')

router.get('/', (req, res) => {
  controller.getProducts(req, res)
});

router.get('/:id', (req, res) => {
  controller.getProduct(req, res)
})

router.post('/', (req, res) => {
  controller.createProduct(req, res)
})
router.patch('/:id', (req, res) => {
  controller.updateProduct(req, res)
})

module.exports = router