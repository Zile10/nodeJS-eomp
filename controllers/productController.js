const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const Product = require('../models/productModel')
const product = new Product()

function getProducts(req, res) {
  try {
    product.getProducts(req, res)
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

module.exports = {
  getProducts
}