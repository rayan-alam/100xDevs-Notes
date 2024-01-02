// Promises are syntactical sugar that makes the code more readable
// Pretty way to write the async and callbacks.

const fs = require('fs');

function rayanReadFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt", "utf-8", function(err, data){
            resolve(data);
        });
    })
}

function onDone(data){
    console.log(data);
}
// control reaches here first, and a promise is asked to the kiratReadFile()
// after the control reaches to the resolve part of the code, it comes back and looks for destination
// the destination is provide by the onDone function.
var a = rayanReadFile();
a.then(onDone);

function kiratAsyncFunction(){
    let p = new Promise(function(resolve){
        resolve("hi there");
    });
    return p;
}
// calling promisified async function
const value = kiratAsyncFunction(); 
value.then(function(data){
    console.log(data);
})