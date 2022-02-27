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
        type:String,
        required:true,
        minlength:0,
        maxlength:10
    },
    numberOfLicenses: {
        type:String,
        required:true,
        minlength:0,
        maxlength:10
    }
});