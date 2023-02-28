require('dotenv').config();
const jwt = require('jsonwebtoken');

// Creating a token
function createToken(user) {
  return jwt.sign(
    {
      emailAdd: user.emailAdd,
      userPass: user.userPass
    },
    process.env.SECRET_KEY,
    {
      expiresIn: '1h'
    }
  );
}

function verifyToken(req, res, next) {
  try {
    const token = req.cookies["LegitUser"] !== null ? req.cookies["LegitUser"] :
    "Please, login using a valid account" ;
    if (token !== "Please, login using a valid account") {
      if (jwt.verify(token, process.env.SECRET_KEY)) {
        req.authenticated = true;
        next();
      } else {
        res.status(400).json({err: "Please, login using a valid account"})
      }
    } else {
      res.status(400).json({err: "Please, login using a valid account"})
    }
  } catch(err) {
    res.status(400).json({err: err.message});
  }
}
module.exports= {createToken, verifyToken};