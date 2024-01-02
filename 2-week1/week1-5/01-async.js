    const fs = require("fs");
    // filesystem module

    // this is an asynchronous function so console.log("hi there"); will run first
    // on the second line will the readFile data will run
    fs.readFile("a.txt", "utf-8", function(err, data){
        console.log(data); 
    })

    console.log("hi there");

    // Example 2 starts here:
    function findSum(n){
        let ans = 0; 
        for(let i=0; i<=n; i++){
            ans += i; 
        }
        return ans;
    }
    function findSumTill100(){
        findSum(100);
    }
    setTimeout(findSumTill100, 1000)
    // hellow world will be printed first, then the function will be called
    // since, it is an async function.
    console.log("hellow world");