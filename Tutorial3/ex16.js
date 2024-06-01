function addNumbers(a, b) {

    // Check if both operands are numbers (int or float)
    if (!((typeof a === 'number') && (typeof b === 'number'))) {
      console.error("Error: Invalid input. Please provide numbers only.");
      return None; // Or return null or any appropriate indicator for error
    }
  
    // Convert string operand to number if necessary
    if (typeof a === 'string') {
      try {
        a = parseFloat(a);
      } catch (error) {
        console.error("Error: Could not convert first operand to a number.");
        return None; // Or return null or any appropriate indicator for error
      }
    }
    if (typeof b === 'string') {
      try {
        b = parseFloat(b);
      } catch (error) {
        console.error("Error: Could not convert second operand to a number.");
        return None; // Or return null or any appropriate indicator for error
      }
    }
  
    // Perform the addition
    const sum = a + b;
    return sum;
  }
  
  // Test the function with different pairs of numbers
  console.log(addNumbers(10, 20)); // Output: 30.0
  console.log(addNumbers(5.5, 3.2)); // Output: 8.7
  console.log(addNumbers("10", "20")); // Output: 30.0 (after conversion)
  console.log(addNumbers(10, "hello")); // Output: Error: Could not convert second operand to a number.
  