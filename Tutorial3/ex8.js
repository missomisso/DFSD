function calculateInterest(principal, rate, time) {
   
    // Calculate the interest using the formula: Interest = (Principal * Rate * Time) / 100
    const interest = (principal * rate * time) / 100;
  
    // Return the calculated interest
    return interest;
  }
  
  // Example usage:
  principal = 10000;
  rate = 5.5;
  time = 3;
  
  interest = calculateInterest(principal, rate, time);
  console.log("The simple interest earned is:", interest);
  