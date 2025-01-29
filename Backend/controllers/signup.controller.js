
const signupUser = async (req,res)=>{
    const { username, email, password } = req.body;
    console.log(username, email, password);
}

module.exports = signupUser;