const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const User = require('../models/userModel');
const user = new User();

function getUsers(req, res) {
  try {
    user.getUsers(req, res);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

module.exports = {
  getUsers
}