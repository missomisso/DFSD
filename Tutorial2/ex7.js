/* Exercise 8: Making Triangle
Use a for loop to print a triangle pattern of stars (*). The triangle should have 5 rows,
with the number of stars increasing by one in each row. */

prompt = require('prompt-sync')();
// Loop through each row
for (let row = 1; row <= 5; row++) {
    let stars = ''; // Initialize an empty string to store stars for the current row
    
    // Loop to print stars for the current row
    for (let j = 1; j <= row; j++) {
        stars += '*'; // Add a star to the string for each iteration
    }
    
    // Print the stars for the current row
    console.log(stars);
}
