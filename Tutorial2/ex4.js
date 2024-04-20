/* Exercise 4: Simple Interest Calculator
Objective: Write a while loop that calculates simple interest every year until the total amount
doubles.
Challenge: not to use any if statement
Common Mistake:
● Using an incorrect formula for simple interest calculation, or failing to update the
amount correctly within the loop. */

const prompt = require('prompt-sync')();
let amount = parseFloat(prompt("Enter the principal amount: "));
const rate = 0.1; // Interest rate (10% in this case)
let totalAmount = amount;

while (totalAmount < 2 * amount) {
    // Calculate the interest for one year
    let interest = totalAmount * rate;
    
    // Add the interest to the total amount
    totalAmount += interest;
}

console.log(`The total amount has doubled. Final amount:, ${totalAmount}`);

