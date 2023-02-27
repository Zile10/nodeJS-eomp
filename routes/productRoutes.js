const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController')

router.get('/', (req, res) => {
  controller.getProducts(req, res)
});

module.exports = router