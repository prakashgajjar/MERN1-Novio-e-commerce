const express = require('express');
const loginUser = require('../controllers/loginUser.controller.js');
const Router = express.Router();

Router.post('/', loginUser);

module.exports = Router;
