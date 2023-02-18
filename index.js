const express = require('express');
// path
const path = require('path');
// cors
const cors = require('cors');
// db
const db = require('./config');
// body-parser
const bodyParser = require('body-parser');
// port 
const port = parseInt(process.env.PORT) || 4000;
// Express app
const app = express();
// Router
const route = express.Router();
// Middleware
const {errorHandling} = require('./middleware/ErrorHandling');
// Message
const {message} = 
require('./middleware/message');

/*
express.json: setting the content-type to application/json
bodyParser.urlencoded( {extended: true} ): Object will contain
values of any type instead of just a string
*/
app.use((req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next();
})
app.use(
    route,
    cors({
        origin: [
        'http://localhost:8080'],
        credentials: true
    }),
    express.json,
    bodyParser.urlencoded({extended: false})
)
// Home or /
// ^/$|/jtbookstore
route.get('^/$|/jtbookstore', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, './view/index.html'));
})
// Login
route.patch('/login', bodyParser.json(), (req, res)=>{
})
// Retrieve all users
route.get('/users', (req, res)=>{

});
// Update
route.put('/user/:id',bodyParser.json(), (req, res)=>{
});
// Register
route.post('/register', bodyParser.json(), (req, res)=> {
})
// Delete
route.delete('/user/:id', (req, res)=>{
});

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
})

// Global error handling
app.use(errorHandling);
