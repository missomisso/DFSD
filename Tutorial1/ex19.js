/* Exercise 19: Test of Operators
● Jo and a friend invented a simple game where the player with the highest value of his
height (in cm) plus five times his age wins.
● Create variables for the heights and ages of two friends and assign them some values
● Calculate their scores
Programming Fundamentals
Diploma in Full Stack Development
● Decide who wins and print the winner to the console. Include the score in the string
that you output to the console. Don’t forget that there can be a draw (both players
with the same score).
● If it is a draw it should print “It’s a draw”
*/

const prompt = require('prompt-sync')();

let height1 = prompt("Enter your height:  ");
let height2 = prompt("Enter your height:  ");

let age1 = prompt("Enter your age:  ");
let age2 = prompt("Enter your age:  ");

let friend1 = (height1+age1*5);
let friend2 = (height2+age2*5);

console.log(`Friend 1 has ${friend1} in total and Friend 2 has ${friend2}`);

if (friend1 >= friend2) {
    console.log("Friend 1 is the winner");
} else if (friend2 >= friend1) {
    console.log("Friend 2 is the winner");
} else {
    console.log("Draw");
}