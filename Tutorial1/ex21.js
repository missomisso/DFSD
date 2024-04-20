const prompt = require('prompt-sync')();

let x = parseFloat(prompt("Enter dollars"));
let y = parseFloat(prompt("Enter cents"));
let cost = x * 100 + y;
let z = parseInt(prompt("Amount of muffins"));

console.log(`The muffins cost $${x} dollars and ${y} cents per piece. User bought a total of ${z} muffins. Total cost is $${(cost * z / 100).toFixed(2)} dollars`);
