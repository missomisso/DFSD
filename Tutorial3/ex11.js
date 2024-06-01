function minutesToSeconds(minutes) {
   
    // Conversion factor: 1 minute = 60 seconds
    const seconds = minutes * 60;
  
    // Return the converted value
    return seconds;
  }
  
  // Test the function with a few sample inputs
  console.log(minutesToSeconds(5)); // Output: 300
  console.log(minutesToSeconds(1.25)); // Output: 75.0
  console.log(minutesToSeconds(0)); // Output: 0.0
  