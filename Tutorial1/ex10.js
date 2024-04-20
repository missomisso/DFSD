const prompt = require('prompt-sync')();

let birthYear = prompt("Enter birthYear")
let currentYear = prompt("Enter currentYear")

let total =  currentYear - birthYear 

console.log(`${total}`)