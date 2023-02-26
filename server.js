// Importing modules and instanciating express app
const express = require('express');
const cors = require('cors');
const app = express();

// importing routes
const router = require('./routes/routes');

app.set('port', process.env.PORT || 3000);
app.use(express.json(), cors());

app.get('/', (req, res) => {
  res.json({msg: "welcome"})
})

app.use('/products', router.products)