const express = require('express');
const User = require('../models/user.models.js');

const cartRemove = async (req, res) => {
  try {
    const { itemId } = req.body;
    console.log(itemId);
    const user = req.user;
    const activeUser = await User.findOne({_id: user.id});
    activeUser.cart_items = activeUser.cart_items.filter((item) => item.id !== itemId);
    await activeUser.save();
    res.status(200).json(itemId);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = cartRemove;
