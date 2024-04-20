const prompt = require('prompt-sync')();
let num1 = prompt("Enter Number")/2;

console.log(`The Number is ${num1}`);

if(num1 % 2 == 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd");
}

