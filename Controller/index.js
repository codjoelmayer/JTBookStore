const express = require('express');
// path
const path = require('path');
// body-parser
const bodyParser = require('body-parser');
// Router
const route = express.Router();
// Models
const {User} = require('../model');
// Create a user instance
const user = new User();
// ^/$|/jtbookstore
route.get('^/$|/jtbookstore', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
})
// =========USER's Router========
// Login
route.post('/login', bodyParser.json(), (req, res)=>{
    user.login(req, res);
})
// Retrieve all users
route.get('/users', (req, res)=>{
    user.fetchUsers(req, res);
});
// Retrieve a user
route.get('/user/:id', (req, res)=>{
    user.fetchUser(req, res);
});
// Update
route.put('/user/:id',bodyParser.json(), (req, res)=>{
    user.updateUser(req, res);
});
// Register
route.post('/register', bodyParser.json(), (req, res)=> {
    user.createUser(req, res);
})
// Delete
route.delete('/user/:id', (req, res)=>{
    user.deleteUser(req, res);
});

module.exports = route;
