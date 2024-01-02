const express = require("express");
const app = express();
function calculateSum(n){
    let ans = 0;
    for(let i=0; i<n; i++){
        ans = ans + i;
    }
    return ans;
}

app.get("/", function(req, res){
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send("The answer is = " + ans);
})
// if localhost:3000/?n=4 is searched on the browser, 6 as answer is shown on the screen
// ?n=4 is used to pass the value of 4 so the calculateSum logic can be run
// this is called query parameters, anything after the / is called route. here we're still in home route

app.get("/", function(req, res){
    res.send("hellow world");
})
app.listen(3000, function(){
    console.log("Page is acive on port 3000");
});
