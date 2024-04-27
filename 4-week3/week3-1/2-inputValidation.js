const express = require("express");
const app = express();
app.use(express.json()); // used to post body parameters

app.post("/health-checkup", (req, res) => {
    const kidney = req.body.kidneys;
    if(!kidney){
        res.json({
            msg: "Wrong Input"
        })
    } else {
        const kidneyLength = kidney.length;
        res.send("you have " + kidneyLength + ": kidneys");
    }
});

// global catches - another middleware put at the end only if there's an exception
// error handling middlewares   
app.use((err, req, res, next) => {
    res.json({
        msg: "Sorry.Something up with our servers."
    });
});

app.listen(3000, () => {
    console.log("Active on port 3000");
});