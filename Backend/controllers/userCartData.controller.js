const express = require('express');
const User = require('../models/user.models.js');


const userProduct = async (req,res)=>{
   
    try {
        const user = await User.findOne({_id : req.user.id});
        return res.status(200).json(user);
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: 'Server error' });
    }
}

module.exports = userProduct;