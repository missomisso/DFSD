const prompt = require('prompt-sync')();

do {
   let num =  prompt("Enter a number: ");
     if (num > 0 &&  num < 11) {
      break;
     }
} while(true) 