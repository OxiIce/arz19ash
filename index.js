const express = require('express');
const mongoose = require('mongoose')
// const winston = require('winston')
const app = express();
require('dotenv').config();
const usersRoute = require('./routes/users')

const PORT = process.env.PORT || 3000

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// create a logger

// routes
app.use('/api/users',usersRoute);

//connect to mongodb atlas
mongoose
    .connect(
    process.env.MONGO_URL,
    {useNewUrlParser:true}
).then(() => {
    console.log("Connected to mongodb atlas")
}).catch(err => {
    console.log("Something wrong happend", err)
})

// Start server
app.listen(PORT, () => {
    console.log('Server started at PORT ', PORT)
})