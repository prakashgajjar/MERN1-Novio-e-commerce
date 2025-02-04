const express = require('express');
const router = express.Router();
const product = require('../controllers/product.controller.js');
const isLogin = require('../middleware/stayLogin.middleware.js');
const userCartData = require('../controllers/userCartData.controller.js');

router.post('/cart',isLogin,product)
router.get('/cartData',isLogin,userCartData)

module.exports = router;