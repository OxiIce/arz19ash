const express = require('express');
const router = express.Router();
// const {User, validataUser} = require('../models/users')
const {User} = require('../models/users')

// POST: CREATE A NEW USER
router.post('/', (req,res) => {

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
});

// GET ALL USERS
router.get('/',(req,res) => {
    User.find().then(users => res.send(users))
    .catch((err) => {
        res.status(500).send("Something went wrong");
    })
})

// GET THE USER BY ID
// router.get('/:userId', (req,res) => {
//     User.findById(req.params.userId).then(user => {
//         if(user) res.send(user);
//         res.status(404).send("User not found")
//     }).catch(err => {
//         // res.status(500).send(err.message)
//         res.status(500).send("User NOT found")
//     })
// })

// UPDATE USER BASED ON ID
// router.put("/:userId", async (req,res) => {
//     const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
//         name:req.body.userName,
//         timeOnPosts:req.body.timeOnPosts,
//         numberOfLicenses:req.body.numberOfLicenses
//     },
//     {new:true})

//     if(!updatedUser) res.status(404).send("User not foundd");
//     res.send(updatedUser)
// })

// DELETE USER BASED ON ID
router.delete("/:userId", async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.userId)

    if(!user) res.status(404).send("User with id not found")
    res.send(user)
})




// GET USER BY USER NAME
router.get('/:userName', (req,res) => {
    User.find({name: req.params.userName}).then(user => {
        if(user.length > 0) {
            // res.send(user)
            res.send(user[0]._id)
        } else {
            res.status(404).send("No user with this name");
        }
    })
    .catch((err) => {
        res.status(500).send("Something went wrong");
    })
})








// UPDATE USER BASED ON ID
router.put("/:userId", async (req,res) => {
    
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
        name:req.body.userName,
        timeOnPosts:req.body.timeOnPosts,
        numberOfLicenses:req.body.numberOfLicenses
    },
    {new:true})

    if(!updatedUser) res.status(404).send("User not foundd");
    res.send(updatedUser)
})
















// UPDATE USER BASED ON USER NAME
// router.put("/:userName", async (req,res) => {

//     User.find({name: req.params.userName}).then(user => {
//         if(user.length > 0) {
//             const userId = user[0]._id

            
//             const updatedUser = User.findByIdAndUpdate(userId, {
//                 name:req.body.userName,
//                 timeOnPosts:req.body.timeOnPosts,
//                 numberOfLicenses:req.body.numberOfLicenses
//             },
//             {new:true})
//             if(!updatedUser) res.status(404).send("User not foundd");
//             res.send(updatedUser)
            

//         } else {
//             res.status(404).send("No user with this name");
//         }
//     })
//     .catch((err) => {
//         res.status(500).send("Something went wrong");
//     })
// })

module.exports = router;