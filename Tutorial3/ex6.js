/* Exercise 6: Check Age Group
Objective: Write a function to categorize a person's age into child, teen, or adult.
Instructions
● Define a function named checkAge that takes one parameter: age.
● Use conditional statements to categorize the age and return the category.
● Print the result based on the age. */



const prompt = require('prompt-sync')();
let age = parseInt(prompt("Enter your age: "));

function checkAge(age) {
    if (age < 13) {
        return "child";
    } else if (age >= 13 && age <= 20) {
        return "teen"; 
    } else {
        return "adult";
    }
}

console.log(`Your age is ${age} and falls under ${checkAge(age)} category.`);





