const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/', (req, res) => {
  controller.getUsers(req, res)
});
router.post('/register', (req, res) => {
  controller.register(req, res)
});
router.post('/login', (req, res) => {
  controller.login(req, res)
});

module.exports = router;