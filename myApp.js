var express = require("express");
require('dotenv').config()

var app = express(console.log("Hello World"));

app.use((req,res,next) =>{
  console.log(req.method + " "+ req.path +" - " + req.ip);
  next();
})
app.get("/", (req, res) => {
  //res.send("Hello Express");
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});

app.get('/now',
  (req,res,next) =>{
    req.time = new Date().toString();
    next();
  },
  (req,res)=>{
    res.send({
      time:req.time
    });
    
  }
);
app.get('/:word/echo',(req,res)=>{
  const {word}=req.params;
  res.json({echo:word})
});

app.get('/name', (res,req)=>{
  
  var { first: firstName, last: lastName }= req.query;
  res.json({
    name : `${firstName} ${lastName}`
  });
});
app.use("/public", express.static(__dirname + "/public"));

module.exports = app;
