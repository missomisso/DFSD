// Create a 2D array of integers
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Access the element at row 1 (index 0), column 2 (index 1)
  const element = myArray[1][2];
  console.log("Element at row 1, column 2:", element); // Output: 6
  
  // Change the value of the element
  myArray[1][2] = 10;
  
  // Print the entire array
  console.log("Modified array:");
  for (let row of myArray) {
    for (let element of row) {
      console.log(element, end=" ");
    }
    console.log(); // Move to the next line after each row
  }
  