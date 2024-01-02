// callbacks without promises
function mySetTimeout(callback, duration){
    setTimeout(callback, 1000);
}
mySetTimeout(function(){
    console.log("after SetTimeout");
}, 1000);

// after promisifying the callback
function promisifiesMySetTimeout(duration){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        }, duration);
    });
    return p;
}
// async await syntax
const ans = promisifiesMySetTimeout(1000);
ans.then(function(){
    console.log("hi there");
});