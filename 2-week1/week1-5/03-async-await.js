function anAsyncFunction(){
    let p = new Promise (function(resolve){
        console.log("before the timeout starts");
        // async login goes here
        setTimeout(function(){
            resolve("hi there!");
        }, 1000)
    });
    return p;
}

async function main(){
    // no callbacks, no .then bullshit
    let value = await anAsyncFunction();
    console.log(value);
};

main();