// JavaScript Basics

console.log("hello world");
// exploring var variable
var a = 1;
console.log(a);
// exploring const variable
const b = 3;
// b = 4;
console.log(b);
// value of const variable can't be changed it will throw an error

// exploring js data types
let firstName = "Rayan";
let age = 21;
let isMarried = false; 
console.log("this person name is" + firstName + " and his age is " + age);
// exploring conditional statements
if(isMarried == true){
    console.log(firstName + " is married.");
} else {
    console.log(firstName + " is not married.");
}

//exploring for loops - sum of 100 numbers
let answer = 0;
let n = 100;
for(let i=0; i<=n; i++){
    answer = answer + i;
}
console.log(answer);

//wap to print all the even number in an array
const  arr1 = [4, 3, 5, 6, 7, 8];
for(let i=0; i<=arr1.length; i++){
    if(arr1[i]  % 2 == 0){
        console.log(arr1[i]);
    }
}

//wap to print the biggest element in an array
let biggestElement = 0; 
for(let i=0; i<=arr1.length; i++){
    if(arr1[i] > biggestElement){
        biggestElement = arr1[i];
    }
}
console.log(biggestElement); 

//exploring objects in javascript - this is how it is defined 
const user1 = {
    firstName: "Rayan",
    gender: "male",
    age: 21
};
// how to access a key in the object?
console.log(user1["firstName"]);
// how is object defined for multiple keys?
const allUsers = [{
    firstName: "Rayan", 
    gender: "male",
    age: 21
} , {
    firstName: "Naman",
    gender: "male",
    age: 22
} , {
    firstName: "Priya", 
    gender: "female",
    age: 18
}];

//wap that prints all the male people's first name given a complex object
for(let i=0; i<allUsers.length; i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstName"]);
    }
}

// Callbacks first approach
function sum1(num1, num2){
    let result = num1 + num2;
    return result;
}
function displayResult1(data){
    console.log("Result of sum of the two number:(first approach) " +data);
}
function displayResultPassive1(data){
    console.log("Sum of two numbers: " +data);
}
//function call - here we are calling two functions
const ans1 = sum1(1,2); 
displayResult1(ans1);

//Callback second approach - having only single functions call
function sum2(num1, num2){
    let result = num1 + num2;
    displayResult2(result);
}
function displayResult2(data){
    console.log("Result of sum of the two number:(second approach) " +data);
}
function displayResultPassive2(data){
    console.log("Sum of two numbers: " +data);
}
//function call - here we are calling one functions
const ans2 = sum2(1,2);

//Callback third approach - having only single function call using function to call
function sum3(num1, num2, fnToCall){
    let result = num1 + num2; 
    return result;
}
function displayResult3(data){
    console.log("Result of sum of the two number:(third approach) " +data);
}
function displayResultPassive3(data){
    console.log("Sum of two numbers: " +data);
}
// calling the function and passing another as an argument 
const ans3 = sum3(1, 2, displayResult3);

// setTimeout as a Callback
function greet(){
    console.log("hellow world");
}
setTimeout(greet, 3 * 1000 );
// setInterval also uses the same concept, but executes the command every given time interval
// setInterval(greet, 1 * 1000);
// here 1000 is in miliseconds: 1sec = 1000 miliseconds