const signup = require('../controllers/signup.controller.js')
const express = require('express');
const router = express.Router();

router.post('/', signup);

module.exports = router;