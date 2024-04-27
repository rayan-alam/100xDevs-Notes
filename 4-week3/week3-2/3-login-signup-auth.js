const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://admin-100xDev:OGx8UVzqL5hVIO1w@cluster0.i0euznc.mongodb.net/userLogin-Signup",
);

const User = mongoose.model('Users', {
  name: String,
  username: String,
  password: String,
});

const app = express();
app.use(express.json());

function userExists(username, password) {
  let userExist = false;
    for(let i=0; i<users_list.length; i++){
      if(users_list[i].username == username && users_list[i].password == password){
          userExist = true;
      }
    }
  return userExist;
}

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
    console.log("Server is live on port 3000");
});