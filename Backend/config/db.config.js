const mongoose = require('mongoose');

const connection = async ()=>{
 await  mongoose.connect('mongodb://localhost:27017/novio')
    .then((result) => {
        console.log('mongodb connected');
    }).catch((err) => {
        console.log(err.message);
    });
}

module.exports = connection;