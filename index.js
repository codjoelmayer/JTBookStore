const express = require('express');
// path
const path = require('path');
// db
const db = require('./config');
// body-parser
const bodyParser = require('body-parser');
// port 
const port = parseInt(process.env.port) || 4000;
// Express app
const app = express();
// Router
const route = express.Router();

app.use(
    route,
    express.json,
    bodyParser.urlencoded({extended: false}),
)
// Home or /
route.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, './view/index.html'));
})
app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
})
