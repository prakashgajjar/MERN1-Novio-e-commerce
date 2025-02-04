const mongoose = require('mongoose');
const connect = require('../config/db.config.js');

connect();

const userSchema = new mongoose.Schema({

        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        
        first_name: { type: String, default: '' },
        last_name: { type: String, default: '' },
        profile_picture: { type: String },  
    
        shipping_address: { type: String },
        billing_address: { type: String },
        phone_number: { type: String },
    
        role: {
            type: String,
            enum: ['customer', 'admin'],
            default: 'customer',
        },
    
        wishlist: [],
        cart_items: [],
        
        order_history: [{  }],

        is_active: { type: Boolean, default: true },


});

const User = mongoose.model('User', userSchema);

module.exports = User;