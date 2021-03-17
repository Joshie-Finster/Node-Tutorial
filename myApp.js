var express = require('express');
var app = express(console.log("Hello World"));
app.get( '/', (req,res) =>{
    //res.send("Hello Express");
    res.sendFile( __dirname + "/views/index.html");
})
app.use("/public", express.static(__dirname + "/public"));
app.get('/json', (req,res)=>{
  if (process.env.VAR_NAME === "allCaps") {
    response = "Hello json".toUpperCase();
  } else {
    response = "Hello json";
  }
});




 





























 module.exports = app;
