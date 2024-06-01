
const myArray = [
    ['A', 'B', 'C'],
    [1, 2, 3],
    ['x', 'y', 'z']
  ];
  

  console.log("Elements with coordinates and values:");
  for (let row = 0; row < myArray.length; row++) {
    for (let col = 0; col < myArray[row].length; col++) {
      const element = myArray[row][col];
      console.log(`Element at (${row}, ${col}): ${element}`);
    }
  }
  