const express = require('express');
const router = express.Router();
const isLogin = require('../middleware/stayLogin.middleware.js');
const isLogined = require('../middleware/jwtData.middleware.js')
const userCartRemove= require('../controllers/userCartRemove.controller.js')


router.post('/',isLogined,userCartRemove)

module.exports = router;