const con = require('../config')

class Product {
  getProducts(req, res) {
    con.query("SELECT * FROM products", (err, result) => {
      if (err) throw err;
      res.status(200);
      res.send(result);
    });
  }
  getProduct(req, res) {
    con.query("SELECT * FROM products WHERE productID = ?", [req.params.id], (err, result) => {
      if (err) throw err;
      res.send(result[0]);
    });
  }
  createProduct(req, res) {
    con.query("INSERT INTO products set ? ", [req.body], (err, result) => {
      if (err) throw err;
      res.send(req.body)
    })
  }
}

module.exports = Product;