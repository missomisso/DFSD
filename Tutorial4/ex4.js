
const myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let totalSum = 0;

for (let row of myArray) {
  for (let element of row) {
    totalSum += element;
  }
}

console.log("Sum of all elements:", totalSum);
