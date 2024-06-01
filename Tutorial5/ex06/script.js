function calculateSum() {
    // Get the values from the textboxes
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
  
    // Calculate the sum
    const sum = firstNumber + secondNumber;
  
    // Display the sum using alert
    alert("The sum of " + firstNumber + " and " + secondNumber + " is: " + sum);
  }
  