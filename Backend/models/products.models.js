const mongoose = require('mongoose');

const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock_quantity: { type: Number, required: true },
    image: { type: String },  // URL to image
    category: { type: String },
    
});

export const Product =   mongoose.model('Product', ProductSchema);