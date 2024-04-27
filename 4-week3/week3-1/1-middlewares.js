const express = require("express");
const app = express();

// without using middlewares - first the authentication is done then the logic is executed
app.get("/health-checkup", (req,res) => {
    // ugly way of writing middlewares
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    if(username != "rayan" || password != "password"){  
        res.status(400).json({msg: "Something wrong with authentication"});
        return
    }
        if(kidneyId != 1 && kidneyId != 2){
            res.status(400).json({msg: "Something wrong with inputs"});
            return
        }
    // do something here    
    res.json({
        msg: "Your kidney is fine"
    })
});

// there can be multiple functions in a route handler
app.get("/health-checkup", (req, res, next) => {
    console.log("hi from function1");
}, (req, res, next) => {
    console.log("hi from function 2");
});

app.listen(3000, () => {
    console.log("Acitve on port 3000");
});