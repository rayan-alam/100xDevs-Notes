const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number()); //this defines the stucture of input

// defining schema example: {   
//     email: string  => email
//     password: atleast 8 letters
//     country: "IN", "US"
// }
// const schema = zod.obj({
//     email: zod.string().email(), // this check for string as well as email
//     password: zod.string().min(8), // this check for string as well as 8 letter password
//     country: zod.literal("IN").or(zod.literal("US")) 
// });

app.use(express.json());

app.post("/health-checkup", (req, res) => {
    const kidney = req.body.kidney;
    const response = schema.safeParse(kidney);
    if(!response.success){
        res.status(411).json({
            msg: "Input is invalid"
        })
    } else {
        res.send({
            response
        });
    }
});

// function for input validation
function validateInput(obj){
    const schema1 = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    });

    const response = schema1.safeParse(obj);
    console.log(response);
}

validateInput({
    email: "rayan@gmail.com",
    password: "tyruri898"
});

// to verify login credentials via a route
app.post("/login", (req, res) => {
    const response = validateInput(req.body);
    if(!response.success){
        res.json({
            msg: "Your inputs are invalid"
        })  
    } else {
        res.send({
            response
        });
    }
});

app.listen(3000, () => {
    console.log("Server active on port 3000");
})