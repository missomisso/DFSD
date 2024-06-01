function celsiusToFahrenheit(celsius) {
   
    const fahrenheit = (celsius * 9 / 5) + 32;
  
    // Return the Fahrenheit temperature
    return fahrenheit;
  }
  
  // Test the function with different Celsius values
  celsiusValues = [0, 100, -20];
  for (const celsius of celsiusValues) {
    fahrenheit = celsiusToFahrenheit(celsius);
    console.log(`${celsius} degrees Celsius is equal to ${fahrenheit.toFixed(2)} degrees Fahrenheit`);
  }
  