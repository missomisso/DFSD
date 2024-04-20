const prompt = require('prompt-sync')();

let Num1= parseInt(prompt("Enter Integer Numer 1:"));
let Num2= parseInt(prompt("Enter Integer Numer 2:"));
let Num3= parseInt(prompt("Enter Integer Numer 3:"));
let Num4= parseInt(prompt("Enter Integer Numer 4:"));

let Ave = (Num1 + Num2 + Num3 + Num4)/4

console.log(`The Average of these four numbers is ${Ave}`);
