// this is how you create a simple http server. basic server in express in nodeJS
const express = require("express"); //define express
const app = express(); //instance of an express
const port = 3000;

app.get('/', function(req, res) {
    res.send('Hello World!'); //what are you responding back with
})

app.get("/route-handler", function(req, res){
    res.send("hi there");
    res.json({
        name: "John Doe",
        age: 21
    })
})

app.post("/conversations", (req, res) => {
    console.log(res.body);
    res.send({
        msg: "2 + 2 = 4"
    })
})

app.listen(port, function() {
  console.log(`App listening on port ${port}`);
})

// create a todo app that lets users store todos on the server
// try to create a http server from scratch in c
// create an http server in rust using actix-web
// create an http server in goland using the gurrila framework
// spring boot java