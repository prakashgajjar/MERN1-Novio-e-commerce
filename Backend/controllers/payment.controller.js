require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const PaymentRequest = async (req, res) => {
    console.log('Payment request received');
    try {
        const { cartItems } = req.body;
        console.log("Request Body:", req.body);
        const product = await stripe.products.create({
            name: 'Novio Clothing',
            description: 'A premium clothing brand',
            images: ['https://example.com/image1.jpg'],
        });
        console.log("Product Created:", product);
        const price = await stripe.prices.create({
            product: product.id, 
            unit_amount: 1000,   
            currency: 'usd',
        });
        console.log("Price Created:", price); 
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: cartItems.map(item => ({
              price_data: {
                currency: 'usd',
                product_data: {
                  name: item.name,
                },
                unit_amount: parseInt(item.price) * 100, 
              },
              quantity: 1,
            })),
            mode: 'payment',
            success_url: `http://localhost:5173/success`,
            cancel_url: `http://localhost:5173/cancel`,
          });
          
        console.log("Session Created:", session);
        return res.json({ id:session.id , url: session.url });
    } catch (error) {
        console.error("Stripe API Error:", error);
        res.status(500).json({ error: error.message });
    }
};
module.exports = PaymentRequest;
