//Import module express & bodyparser
const bodyParser = require('body-parser');
const express = require('express')

//var global express
const app = express()

//Parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Panggil routes
var routes = require('./routes/routes')
routes(app)


//Running server port
app.listen(4000, () => {
    console.log(`Server started on port`);
});