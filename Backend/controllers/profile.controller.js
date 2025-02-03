const express = require('express');
const User = require('../models/user.models.js');

const UserService = async (req, res) => {
 try {
  jwt.verify(loginTtokenx, 'prakash', function(err, decoded) {
    console.log(decoded.foo) 
  });
  
 } catch (error) {
    console.log(error.message);
 }

  console.log('profile page is active now')
};

module.exports = UserService;
