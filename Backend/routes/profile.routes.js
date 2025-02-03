const express = require('express');
const Router = express.Router();
const profile = require('../controllers/profile.controller.js');
const isLogin = require('../middleware/stayLogin.middleware.js');

Router.get('/',profile);

module.exports = Router;