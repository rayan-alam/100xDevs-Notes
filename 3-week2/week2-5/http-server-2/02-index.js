// building a HOSPITAL Server
 
const express = require("express");
const app = express();

const users = [{
    name: "rayan",
    kidneys: [{
        healthy: false
    }] 
}];

app.get("/", function(req, res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0; 
    for(let i=0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys, 
        numberOfUnhealthyKidneys
    })
})

app.use(express.json());
app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        health: isHealthy
    })
    res.json({
        msg: "done"
    })
})

app.put("/", function(req, res){
    for (let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function(req, res){
    // check for atleast one unhealthy kidney
    let atleastOneUnhealthyKidney = false;
    for(let i=0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }

    const newKidneys =[];
    for(let i=0; i< users[0].kidneys.length; i++){
        newKidneys.push({
            healthy: true
        })
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "Done"});
})

app.listen(3000, function(req, res){
    console.log("Active on port 3000");
})