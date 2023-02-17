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
    res.append('Access-Control-Allow-Origin', ['http://127.0.0.1:8080', 
    'http://localhost:8080']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(
    route,
    cors(),
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
    const {emailAdd, userPass} = req.body;
    const strQry = 
    `
    SELECT firstName, lastName, emailAdd, userPass, 
    country
    FROM Users
    WHERE emailAdd = '${emailAdd}';
    `;
    db.query(strQry, (err, data)=>{
        if(err) throw err;
        if((!data.length) || (data == null)) {
            res.status(401).json({err: 
                "You provide a wrong email address"});
        }else {
            if(userPass === data[0].userPass) {
                res.status(200).json(
                    {result: data[0]});
            }else {
                res.status(200).json({err: 
                    `You provide a wrong password`});
            }
        }
    }) 
})
// Retrieve all users
route.get('/users', (req, res)=>{
    const strQry = 
    `
    SELECT firstName, lastName, emailAdd, country
    FROM Users;
    `;
    //db
    db.query(strQry, (err, data)=>{
        if(err) throw err;
        else res.status(200).json( 
            {results: data} );
    })
});
// Update
route.put('/user/:id',bodyParser.json(), (req, res)=>{
    let data = req.body;
    const strQry = 
    `
    UPDATE Users
    SET ?
    WHERE userID = ?;
    `;
    //db
    db.query(strQry,[data, req.params.id], 
        (err)=>{
        if(err) throw err;
        res.status(200).json( {msg: 
            "A row was affected"} );
    })
});
// Register
route.post('/register', bodyParser.json(), (req, res)=> {
    let detail = req.body;
    // sql query
    const strQry =
    `INSERT INTO Users
    SET ?;`;
    db.query(strQry, [detail], (err)=> {
        if(err) {
            res.status(400).json({err});
        }else {
            res.status(200).json({msg: "A user record was saved."})
        }
    })
})
// Delete
route.delete('/user/:id', (req, res)=>{
    const strQry = 
    `
    DELETE FROM Users
    WHERE userID = ?;
    `;
    //db
    db.query(strQry,[req.params.id], 
        (err)=>{
        if(err) throw err;
        res.status(200).json( {msg: 
            "A record was removed from a database"} );
    })
});

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
})

// Global error handling
app.use(errorHandling);
