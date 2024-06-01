// Sample 2D array
const myArray = [[5, 2, 8], [1, 7, 3], [4, 9, 6]];

// Function to find the largest number in a row
function findLargestInRow(row) {
  let largest = row[0]; // Initialize with first element
  for (let element of row) {
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

// Find and print largest number in each row
for (let row of myArray) {
  const largestInRow = findLargestInRow(row);
  console.log("Largest number in row:", largestInRow);
}
