function square(n){
    return n * n;
}
function cube(n){
    return n * n * n;
}
function sumOfSquare(a, b){
    let val1 = square(a);
    let val2 = square(b);

    return val1 + val2;
}
const ans = sumOfSquare(1,2);
console.log(ans);

function sumOfCube(a, b, c){
    let val1 = cube(a);
    let val2 = cube(b);
    let val3 = cube(c);
    return val1 + val2 + val3;
} 
const ans1 = sumOfCube(1,2,3);
console.log(ans1);

function sumOfSomething(a, b, callback){
    console.log(a);
    console.log(b);
    console.log(callback); 
    const val1 = callback(a);
    const val2 = callback(b);
    return val1 + val2;
}

const ans2 = sumOfSomething(2,3,square);
console.log(ans2);