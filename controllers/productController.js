const Product = require('../models/productModel')
const product = new Product()

module.exports = {
  getProducts(req, res) {
    try {
      product.getProducts(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  getProduct(req, res)  {
    try {
      product.getProduct(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  createProduct(req, res) {
    try {
      product.createProduct(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
}