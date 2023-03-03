// Importing modules and instantiating express app
const path = require('path')
const express = require('express');
const cors = require('cors');
const app = express();

// Importing routes
const router = require('./routes/router');

// Setting port based on environment variables
require('dotenv').config();
const port = process.env.PORT || 3000;

// App settings & middleware
app.set('port', process.env.PORT || 3000);
app.use(express.json(), cors());

// Allowing frontend access to backend
app.use((req, res, next)=> {
  res.header('Access-Control-Allow-Origin', '*')
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Methods", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next();
});

// Root Route
app.get('/', (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, './views/index.html'));
})
// Use router to handle product and user routes
app.use('/users', router.userRoutes);
app.use('/products', router.productRoutes);


// Set app to listen on the given port
app.listen(port, () => {
  console.log('Listening on port', port);
})