function sumPositiveNumbers(array) {
    const positiveNumbers = array.filter(number => number > 0);

    const sum = positiveNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
    return sum;
  }
  
 
  const numbers = [1, -2, 3, 4, -5];
  const positiveSum = sumPositiveNumbers(numbers);
  console.log("The sum of positive numbers in [-1, 2, -3, 4, -5] is:", positiveSum); 
  
  const numbers2 = [-1, 2, -3, 4, -5, 6];
  const positiveSum2 = sumPositiveNumbers(numbers2);
  console.log("The sum of positive numbers in [-1, 2, -3, 4, -5, 6] is:", positiveSum2); 
  