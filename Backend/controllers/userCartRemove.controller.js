const express = require('express');
const User = require('../models/user.models.js');

const cartRemove = async (req, res) => {
  try {
    const { itemId } = req.body;
    console.log(itemId);

 
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = cartRemove;
