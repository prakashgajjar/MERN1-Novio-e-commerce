const mongoose = require('mongoose');

const OrderSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    total_amount: { type: Number, required: true },
    shipping_address: { type: String, required: true },
    order_date: { type: Date, default: Date.now },
    status: {
        type: String,
        enum: ['pending', 'shipped', 'delivered'],
        default: 'pending',
    },
});

export const Order = mongoose.model('Order', OrderSchema);