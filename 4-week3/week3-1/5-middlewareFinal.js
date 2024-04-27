const express = require("express");
const app = express();

function userMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "rayan" || password != "password"){  
        res.status(400).json({
            msg: "Something wrong with authentication"
        });
    } else {
        next();
    }
};

function kidneyMiddleware(req, res, next){
    const kidneyId = req.query.kidneyId;

    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            msg: "Something wrong with inputs"
        });
    } else {
        next();
    }
};

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res){
    res.send("Your heart is doing fine");
});

app.get("/kidney-check", userMiddleware, kidneyMiddleware, function(req, res){
    res.send("Your kidney is going fine");
}); 

app.listen(3000, () => {
    console.log("Acitve on port 3000");
});