// map, filter, arrow functions

// generic way to write function
function sum(a,b){
    return a + b;
}
const ans = sum(1,2);
console.log(ans);

// better way to write the same - arrow functions 
const sum = (a,b) => {
    return a + b;
}

// MAP
// given an array, give me back a new array in which every value is multiplied by 2
// input:[1,2,3,4] 
// output:[2,2,6,8]
const input = [1,2,3,4,5];
const resultArr = [];
for(let i=0; i<input.length; i++){
    resultArr.push(input[i] * 2);
}
console.log(resultArr);

//other solution - whenever told to transform array use map
function transform(i){
    return i * 2;
}
const ans2 = input.map(transform);
console.log(ans2);

// Filtering
// given an input array, return all even values from it
const inputArr = [1,2,3,4,5];
const resultArr2 = [];
for(let i=0; i<inputArr.length; i++){
    if(inputArr[i] % 2 == 0){
        resultArr2.push(inputArr[i]);
    }
}
console.log(resultArr2);

//using filter function of js
function filterLogic(n){
    if(n % 2 == 0){
        return true;
    } else {
        return false;
    }
}
const ans3 = arr.filter(filterLogic);
console.log(ans);
