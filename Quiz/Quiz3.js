/*
The formula for calculating heart rate range is as follows:

heart rate range = heart rate reserve * training intensity + resting heart rate
*/

/* 
Enter your age: 30

Enter your resting heart rate: 80

The range of your heart rate for low intensity training to high intensity training is

from 113 to 157 beats per minute
*/

const prompt = require('prompt-sync')();
let age = parseInt(prompt("Enter your age: "));
let restingHeart = parseInt('80');
let maximumHeart = (220 - age); // Answer should be 190
let heartRateReserve = (maximumHeart - restingHeart); // Answer should be 110

const lowIntensity = (heartRateReserve * 0.3) + restingHeart; // Answer should be 113
const highIntensity = (heartRateReserve * 0.7) + restingHeart; // Answer should be 157

console.log(maximumHeart);
console.log(lowIntensity);
console.log(highIntensity);


