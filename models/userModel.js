const dbCon = require('../config');
const con = require('../config')


class User {
  getUsers(req, res) {
    con.query("SELECT * FROM users", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  }
}

module.exports = User;