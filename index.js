const express = require('express');     // importing the express module or library
const app = express();                  // calling express as function it generated new application that represents a running express app.

let data = {'message1 for you':'hello world frox node and express '};

app.get('/',(req,res) =>{
    res.send(data);
});

const Port = process.env.PORT || 5000 ;
app.listen(Port);//