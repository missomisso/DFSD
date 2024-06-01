function findLargest(num1, num2) {

    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
  
  console.log(findLargest(10, 20)); // Output: 20
  console.log(findLargest(5, 3)); // Output: 5
  console.log(findLargest(15, 15)); // Output: 15
  