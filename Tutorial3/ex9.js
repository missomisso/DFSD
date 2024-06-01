function isOddOrEven(number) {
    
  
    // Check if the number is even using the modulo operator (%)
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  // Test the function with different numbers
  numbers = [1, 4, 9, 16, 25];
  for (const number of numbers) {
    result = isOddOrEven(number);
    console.log(`${number} is ${result}`);
  }
  