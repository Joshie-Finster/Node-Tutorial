var express = require("express");
require('dotenv').config()
var bodyParser = require('body-parser');

var app = express(console.log("Hello World"));

app.use((req,res,next) =>{
  console.log(req.method + " "+ req.path +" - " + req.ip);
  next();
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
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

app.get('/name', (req,res)=>{
  let string = req.query.first + ' ' + req.query.last

  res.json({
    name : string
  });

});
app.post('/name', (req,res)=>{
  let string = req.body.first + ' ' + req.body.last;
  res.json({name:string})
})
app.use("/public", express.static(__dirname + "/public"));

module.exports = app;
