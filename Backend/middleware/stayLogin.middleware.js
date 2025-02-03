const jwt = require('jsonwebtoken');

const isLogin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided, please log in.' });
  }

  try {
 
    const decoded = jwt.verify(token, 'prakash');
    req.user = decoded;
   next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token. Access denied.' });
  }
};

module.exports = isLogin;
