const express = require('express');
// port 
const port = parseInt(process.env.port) || 4000;
// Express app
const app = express();
// Router
const route = express.Router();

app.use(
    route
)
// Home or /
route.get('/', (req, res)=>{
    res.status(200).send("Well done");
})

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
})
