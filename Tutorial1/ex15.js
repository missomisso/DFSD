const prompt = require('prompt-sync')();
let score = prompt("Enter score")

if (score >= 75) {
    console.log("Your score is grade is A");
} else if (score >=50) {
    console.log("You passed");
} else {
    console.log("You failed");
} 

console.log("Done");