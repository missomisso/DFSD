/* Exercise 7: Break out of an Infinite Loop
Implement an infinite for loop that the user can break out of by entering a specific word
(e.g., "exit"). */

prompt = require('prompt-sync')();
let x = parseInt(prompt("Enter your number: "));

while(true) {
    x = prompt("Enter your number: ");
    if (x === "exit") {
        break;
    }
}
console.log("You have ended the loop")