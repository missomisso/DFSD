function printTable(number) {
   
    // Print the header row
    console.log(`Multiplication table for ${number}`);
  
    // Loop from 1 to 10 to generate the multiplication table
    for (let i = 1; i <= 10; i++) {
      // Calculate the product and print it in a formatted way
      const product = number * i;
      console.log(`${number} x ${i} = ${product}`);
    }
  }
  
  // Call the function to print tables for different numbers
  printTable(5);
  printTable(7);
  