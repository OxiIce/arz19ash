const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
// const {User, validataUser} = require('../models/users')
const {User} = require('../models/users')

// GET ALL USERS
router.get('/',(req,res) => {
    User.find().then(users => res.send(users))
    .catch((err) => {
        res.status(500).send("Something went wrong");t
    })
})


// GET ALL USERS
router.get('/',(req,res) => {
    User.find().then(users => res.send(users))
    .catch((err) => {
        res.status(500).send("Something went wrong");t
    })
})


// GET USER ID
router.get('/getid/:username', async (req,res) => {
    const userName = req.params.username
    User.find({name: userName}).then(user => {
        if(user.length > 0) {
            res.send(user[0]._id)
        } else {
            res.send('No user')
        }
    })
    .catch((err) => {
        res.status(500).send("Something went wrong");
    })    
})

// ADD NEW USER WITH DATA
router.get('/add/:data', async (req,res) => {

    console.log(req.params.data)

    const data = req.params.data

    const myArray = data.split("|");

    const userName = myArray[0]
    const timeOnPosts = myArray[1]
    const numberOfLicenses = myArray[2]
    const timeOfLastUp = myArray[3]

    user = new User({
        name:userName,
        timeOnPosts:timeOnPosts,
        numberOfLicenses:numberOfLicenses,
        timeOfLastUp:timeOfLastUp
    });

    user.save().then(user => {
        res.send('New Data Saved');
    }).catch(err => {
        res.send("User was not stored in DB")
    })
})

// UPDATE USER WITH DATA
router.get('/update/:data', async (req,res) => {

    const data = req.params.data

    const myArray = data.split("|");

    const userName = myArray[0]
    const timeOnPosts = myArray[1]
    const numberOfLicenses = myArray[2]
    const timeOfLastUp = myArray[3]


    User.find({name: userName}).then( async user => {
        if(user.length > 0) {
            // res.send(user[0]._id)
            const updatedUser = await User.findByIdAndUpdate(user[0]._id, {
                name:userName,
                timeOnPosts:timeOnPosts,
                numberOfLicenses:numberOfLicenses,
                timeOfLastUp:timeOfLastUp
            },
            {new:true})
            
            if(!updatedUser) res.status(404).send("User not foundd");
            res.send('New Data Saved')
        } else {
            res.send('No user')
        }
    })
    .catch((err) => {
        res.status(500).send("Something went wrong");
    })






    

    
    
})

// REMOVE USER FROM DB
router.get('/remove/:userid', async (req,res) => {

    const userid = req.params.userid

    const myArray = data.split("|");

    const user = await User.findByIdAndRemove(userid)

    if(!user) res.status(404).send("User with id not found")
    res.send('user removed')
})






// // UPDATE USER BASED ON ID
// router.put("/:userId", async (req,res) => {

//     const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
//         name:req.body.userName,
//         timeOnPosts:req.body.timeOnPosts,
//         numberOfLicenses:req.body.numberOfLicenses,
//         timeOfLastUp:req.body.timeOfLastUp
//     },
//     {new:true})

//     if(!updatedUser) res.status(404).send("User not foundd");
//     res.send(updatedUser)
// })


// // POST: CREATE A NEW USER
// router.post('/', (req,res) => {

//     user = new User({
//         name:req.body.userName,
//         timeOnPosts:req.body.timeOnPosts,
//         numberOfLicenses:req.body.numberOfLicenses,
//         timeOfLastUp:req.body.timeOfLastUp
//     });

     

//     user.save().then(user => {
//         res.send(user);
//     }).catch(err => {
//         res.status(500).send("User was not stored in DB")
//     })
// });

// // GET ALL USERSt
// router.get('/',(req,res) => {
//     User.find().then(users => res.send(users))
//     .catch((err) => {
//         res.status(500).send("Something went wrong");t
//     })
// })

// // DELETE USER BASED ON ID
// router.delete("/:userId", async (req, res) => {
//     const user = await User.findByIdAndRemove(req.params.userId)

//     if(!user) res.status(404).send("User with id not found")
//     res.send(user)
// })

module.exports = router;




