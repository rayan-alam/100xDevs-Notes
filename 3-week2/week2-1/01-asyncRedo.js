const fs = require("fs");
const { RedirectHandler } = require("undici-types");

console.log("before reading the file");
fs.readFile("a.txt", "utf-8",
 function(err, data) {
    console.log(data);
});
console.log("after reading the file");

function readAndThenWriteFile(cb){
    fs.readFile("a.txt", "utf-8",
    function(err, data){
        data = data + " Harkirat was here";
        fs.writeFile("a.txt", function(){
            cb();
        });
    });
}

// callbacks lead to unecessary indentation. This is what is called callback hell
// refer 2-1 at 1:20:00
// promised fix that issue