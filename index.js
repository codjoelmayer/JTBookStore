const express = require('express');
// route
const router = require('./controller');
// cors
const cors = require('cors');
// port 
const port = parseInt(process.env.PORT) || 4000;
// Express app
const app = express();
// Middleware
const {errorHandling} = require('./middleware/ErrorHandling');
/*
express.json: setting the content-type to application/json
bodyParser.urlencoded( {extended: true} ): Object will contain
values of any type instead of just a string
*/
app.use(errorHandling, 
    (req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next();
})
app.use(
    router,
    cors({
        origin: [
        'http://localhost:8080'],
        credentials: true
    }),
    express.json,
    express.urlencoded({extended: false})
)
// Server is running
app.listen(port, ()=> {
    console.log(`Server is running`)
});