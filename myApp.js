var express = require('express');
var app = express(console.log("Hello World"));
app.get( '/', (req,res) =>{
    //res.send("Hello Express");
    res.sendFile( __dirname + "/views/index.html");
})
app.use(__dirname + "/public", express.static());


































 module.exports = app;
