function canVote(age) {
  
    return age >= 21;
  }
  
  // Test the function with various ages
  console.log(canVote(18)); // Output: false
  console.log(canVote(25)); // Output: true
  console.log(canVote(30)); // Output: true
  