const mongoose = require('mongoose');
// const yup = require('yup')

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
    },
    timeOfLastUp: {
        type:String,
        required:true,
        minlength:0,
        maxlength:50
    }
});

// const validataUser = user => {
//     const schema = yup.object().shape({
//         userName:yup.string().required().min(3).max(50),
//         timeOnPosts:yup.number().required().min(0).max(999999),
//         numberOfLicenses:yup.number().required().min(0).max(999999)
//     });

//     return schema.validate(user).then(user => user).catch(err => {
//         return {
//             message:error.message
//         }
//     })
// }

exports.User = new mongoose.model('User', UserSchema)
// exports.validataUser = validataUser;