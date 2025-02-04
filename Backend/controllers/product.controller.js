const express = require('express');
const User = require('../models/user.models.js');

const userProduct = async (req,res)=>{
    const {id} = req.body;
    try {
        const user = await User.findOne({_id : req.user.id});
        await user.cart_items.push(req.body) 
        await user.save()
        console.log(user) 
        return res.status(200).json( {message: 'Product added to cart'}, {cartdetail : user.cart_items });
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: 'Server error' });
    }
}

module.exports = userProduct;