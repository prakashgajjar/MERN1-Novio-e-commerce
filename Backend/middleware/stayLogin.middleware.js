
const jwt = require('jsonwebtoken');

const isLogin = (req,res)=>{
    const token = req.headers.authorization?.split(' ')[1];
    if(!token) return false;
    try {
        const decoded = jwt.verify(token, 'prakash');
        return decoded;
    } catch (error) {
        return false;
    }
}

module.exports = isLogin;