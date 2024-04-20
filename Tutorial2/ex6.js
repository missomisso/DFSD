/* Exercise 6: Guessing Game
Objective: Implement a guessing game using a do-while loop where the user has to guess a
predefined number (e.g., 7). The loop should continue until the correct number is guessed */

const prompt = require('prompt-sync')();
const targetNumber = 7; // Predefined number to guess
let guess = prompt("Guess the number: "); // Variable to store user's guess

do {
    // Prompt the user to enter their guess
    guess = parseInt(prompt("Guess the number: "));
    
    // Check if the guess matches the target number
    if (guess === targetNumber) {
        console.log("Congratulations! You guessed the correct number:", targetNumber);
    } else {
        console.log("Incorrect guess. Try again!");
    }
} while (guess !== targetNumber);
