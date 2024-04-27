const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "1234567"; //using this password will the token be converted vice-versa

const app = express(); 
app.use(express.json());

// in-memory user database
const users_list = [
    {
        username: "rayan@gmail.com", 
        password: "2341",
        name: "rayan alam"
    },
    {
        username: "rayan23@gmail.com",
        password: "45678",
        name: "sikandar churuwala"
    },
    {
        username: "rayan890@gmail.com",
        password: "67583",
        name: "alpha pandey"
    }
];

const userExists = (username, password) =>{
    let userExist = false;
    for(let i=0; i<users_list.length; i++){
        if(users_list[i].username == username && users_list[i].password == password){
                userExist = true;
        }
    }
    return userExist;
}

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password; 
    if(!userExists(username, password)){
        return res.status(403).json({
            msg: "User does not exist in the memory"
        });
    }

    var token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    try{    
        const decoded = jwt.verify(token, jwtPassword); //original json object
        const username = decoded.username; 
        res.json({
            users: users_list.filter((value) => {   
                if(value.username == username) {
                    return false;
                } else {
                    return true;
                }
            })
        });
    } catch(err) {
        return res.status(403).json({
            msg: "Token not valid"
        });
    }
});

app.listen(3000, () => {
    console.log("Server live on port 3000");
});

// running this on postman and sending correct post request of email and password
// would generate a token, you can go to jwt.io, paste the token and see the username and password
// linked to the same.               