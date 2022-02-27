const mongoose = require('mongoose');

// USER SCHEMA
const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },
    timeOnPosts: {
        type:Number,
        required:true,
        min:0,
        max:999999
    },
    numberOfLicenses: {
        type:Number,
        required:true,
        min:0,
        max:999999
    }
});

module.exports = new mongoose.model('Users', UserSchema)