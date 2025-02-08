const express = require('express');
const app = express();
const login = require('./routes/login.routes.js');
const signup = require('./routes/signup.routes.js');
const home = require('./routes/home.routes.js');
const profile = require('./routes/profile.routes.js');
const cartDetail = require('./routes/cartDetail.routes.js');
const cookieParser = require('cookie-parser'); 
const cartRemove = require('./routes/cartRemove.routes.js');
const payment = require('./routes/payment.routes.js'); 
const path = require('path');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/login',login);
app.use('/signup',signup);
app.use('/home',home);
app.use('/profile',profile);
app.use('/cartRemove',cartRemove);
app.use('/api',cartDetail);
app.use('/payment',payment);

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true 
}));

app.use(express.static(path.join(__dirname, "../Frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT , () => {
  console.log('Server is running on port 3000');
})