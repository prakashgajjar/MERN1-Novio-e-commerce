const jwt = require('jsonwebtoken');

const isLogin = (req, res, next) => {
  const token = req.cookies.loginToken || req.cookies.signupToken; 

  if (!token) {
    return res.status(401).json({ message: 'No token provided, please log in.' });
  }

  try {
 
    const decoded = jwt.verify( token, 'prakash');
    console.log(decoded.foo) 
    req.user = decoded;
    console.log(token)
   next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token. Access denied.' });
  }
};

module.exports = isLogin;
