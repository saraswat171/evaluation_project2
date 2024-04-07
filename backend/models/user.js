
const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    name: {type:String , required:true},
    email: { unique: true, type: String , required:true },
    password:{type:String , required:true},
    role : {type:String , required:true}
},{timeseries:true})

module.exports = mongoose.model("users", UsersSchema)
