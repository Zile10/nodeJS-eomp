const dbCon = require('../config');
const con = require('../config')


class Product {
  getProducts(req, res) {
    con.query("SELECT * FROM products", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  }
}

module.exports = Product;