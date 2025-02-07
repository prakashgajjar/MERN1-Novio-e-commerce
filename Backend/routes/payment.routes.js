const express = require('express');
const isLogin = require('../middleware/stayLogin.middleware');
const PaymentRequest = require('../controllers/payment.controller.js');
const router = express.Router();

router.post('/', PaymentRequest);

module.exports = router;