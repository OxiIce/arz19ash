const express = require('express');
const router = express.Router();
const User = require('../models/users')

// POST: CREATE A NEW USER
router.post('/',(req,res) => {
    
    user = new User({
        name:req.body.userName,
        timeOnPosts:req.body.timeOnPosts,
        numberOfLicenses:req.body.numberOfLicenses
    });

    user.save().then(user => {
        res.send(user);
    }).catch(err => {
        res.status(500).send("User was not stored in DB")
    })
})

module.exports = router;