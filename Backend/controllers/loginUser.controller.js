const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.models.js');

const loginUser = async (req, res) => {
    const {username , password , email} = req.body;
    console.log(req.body);
}

module.exports = loginUser;