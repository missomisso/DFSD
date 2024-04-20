/* Write a program that asks the user to enter the PSI level (a floating-point number).
Challenge: Check whether it is a valid number and only allow valid float inputs.
If it is equal or above 100, print "Unhealthy"
If it is above 50 but below 100, print "Moderate"
Otherwise, if the PSI is less than 50, print "Healthy"
*/

const prompt = require('prompt-sync')();

let PSI = prompt("Enter the PSI level: ");

if (PSI >= 100) {
    console.log("Unhealthy");
} else if (PSI >= 50) {
    console.log("Moderate");
} else {
    console.log("Healthy");
}


console.log(`The PSI is ${PSI}`)