const jwt  = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.models.js');

const signupUser = async (req,res)=>{
    const { username, email, password } = req.body;
    console.log(username, email, password);

try {
   const salt = await  bcrypt.genSalt(10)
      
    const bcryptedPassword = await bcrypt.hash(password, salt)
          
            const newUser =  await User.create({
                username,
                email,
                password : bcryptedPassword.toString(),
            })
    
            console.log(newUser);
           
         
            res.cookie('token', token, { httpOnly: true , sameSite: 'Strict' })
         console.log(token);
           res.cookie('token', token);
           res.status(201).json({message: 'User created successfully'});
} catch (error) {
    console.error(error.message)
}


}

module.exports = signupUser;