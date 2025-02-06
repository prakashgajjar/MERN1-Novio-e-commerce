const express = require('express');
const router = express.Router();
const isLogin = require('../middleware/stayLogin.middleware.js');
const userCartRemove= require('../controllers/userCartRemove.controller.js')


router.post('/',isLogin,userCartRemove)

module.exports = router;