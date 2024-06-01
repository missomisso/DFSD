function calculator(operand1, operand2, operator) {

  
    // Use a switch statement for clarity
    switch (operator) {
      case "+":
        return operand1 + operand2;
      case "-":
        return operand1 - operand2;
      case "*":
        return operand1 * operand2;
      case "/":
        // Handle division by zero
        if (operand2 === 0) {
          return "Error: Division by zero";
        } else {
          return operand1 / operand2;
        }
      default:
        return "Error: Invalid operator";
    }
  }
  
  // Test the function with different operands and operators
  console.log(calculator(5, 3, "+")); // Output: 8
  console.log(calculator(10, 4, "-")); // Output: 6
  console.log(calculator(2, 5, "*")); // Output: 10
  console.log(calculator(10, 2, "/")); // Output: 5
  console.log(calculator(10, 0, "/")); // Output: Error: Division by zero
  console.log(calculator(5, 3, "%")); // Output: Error: Invalid operator
  