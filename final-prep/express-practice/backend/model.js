const mongoose=require('mongoose')

const user = new mongoose.Schema({
    name:String,
    password:String
})

module.exports = mongoose.model('User',user);