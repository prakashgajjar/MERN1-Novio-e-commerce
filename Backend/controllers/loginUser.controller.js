const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.models.js');


const loginUser = async (req, res) => {
    const {password , email} = req.body;
    console.log(req.body);

    try {
        const findUser = await User.findOne({email: email});
        if(!findUser) return res.status(404).json({message: 'User not found'});
        const isPasswordCorrect = await bcrypt.compare(password, findUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message: 'Invalid Password'});
        const loginToken = jwt.sign({id: findUser._id , userEmail : email}, "prakash", {expiresIn: '1h'});
        res.cookie('loginToken', loginToken, { httpOnly: true , sameSite: 'Strict' })
        res.status(200).json({message: 'Login successful'});
    } catch (error) {
        
    }
}

module.exports = loginUser;