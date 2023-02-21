const express = require('express');
// route
const route = require('./controller');
// cors
const cors = require('cors');
// port 
const port = parseInt(process.env.PORT) || 4000;
// Express app
const app = express();
// Middleware
const {errorHandling} = require('./middleware/ErrorHandling');
//
const cookieParser = require('cookie-parser');
/*
express.json: setting the content-type to application/json
bodyParser.urlencoded( {extended: true} ): Object will contain
values of any type instead of just a string
*/
app.use((req, res, next)=> {
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
        res.header("Access-Control-Allow-Credentials", "true")
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
        res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
        next();
});
app.use(route);
app.use(
    cors(),
    cookieParser(),
    express.json,
    express.urlencoded({extended: false})
)

// Server is running
app.listen(port, ()=> {
    console.log(`Server is running`)
});
// Handling all errors
app.use(errorHandling);