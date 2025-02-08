const express = require('express');
const cookieParser = require('cookie-parser');
const User = require('../models/user.models.js');

const app = express();
app.use(cookieParser()); 
const UserService = async (req, res) => {
    try {
      const user = req.user;
     const activeUser = await User.findOne({_id: user.id});
      res.json(activeUser);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = UserService;
