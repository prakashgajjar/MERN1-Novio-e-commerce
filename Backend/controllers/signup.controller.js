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
    
            const signupToken = await jwt.sign({email:email,id: newUser._id}, "prakash");
        //  console.log(signupToken);
         res.cookie('signupToken', signupToken, {
            httpOnly: true, 
            secure: false,  
            sameSite: 'lax',
            maxAge: 3600000 
        });
           res.status(201).json({message: 'User created successfully'});
} catch (error) {
    console.error(error.message)
}


}

module.exports = signupUser;