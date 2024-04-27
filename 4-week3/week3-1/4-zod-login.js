const express = require("express");
const zod = require("zod");
const app = express();

app.use(express.json());

function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    });
    
    const response = schema.safeParse(obj);
    console.log(response);
}

// verification via an express route
app.post("/login", (req, res) => {
    const inputs = req.body;
    const response = validateInput(inputs);
    if(!response.success){
        res.json({
            msg: "your input is invalid"
        })
        return
    }
});

app.listen(3000, () => {
    console.log("Server live on port 3000");
})

// Notes:
// const schema = zod.array(zod.number());
// this defines the schema of the input that is coming in,
// which here means and array of numbers, should be the input
