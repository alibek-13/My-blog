import { Schema, model } from "mongoose";
// import { Schema, model } from "mongoose" Используется для схемы базы данных


const userSchema = new Schema({
    first_name: {type: String,  required: true},
    last_name: {type: String, required: true},
    phone: {type: Number, required: true, unique: true},
    password: {type: String, required:true, minlength: 6},
    email: {type: String, required: false},
    frends: {type: Array},
    Photos: {type: Array, required: true},
    Posts: {type:Array, required: true},
 
})

module.exports = model('User', userSchema)