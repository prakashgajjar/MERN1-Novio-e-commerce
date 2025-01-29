const express = require('express');
const app = express();
const login = require('./routes/login.routes.js');
const signup = require('./routes/signup.routes.js');
const home = require('./routes/home.routes.js');
const cookieParser = require('cookie-parser'); 

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/',home);
app.use('/login',login);
app.use('/signup',signup);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port 3000');
})