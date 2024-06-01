/**
 * Calculates the mean (average) of the values in a numerical array.
 *
 * @param {number[]} array - The array of numbers to calculate the mean of.
 * @returns {number} The mean of the values in the array, or NaN if the array is empty.
 */
function mean(array) {
    if (array.length === 0) {
      return NaN;
    }
  
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
    return sum / array.length;
  }
  
  const numbers1 = [4, 2, 8, 6];
  const numbers2 = [1, 2, 3, 4];
  const numbers3 = [1, 2, 2];
  const emptyArray = [];
  
  console.log("mean([4, 2, 8, 6]) =", mean(numbers1)); 
  console.log("mean([1, 2, 3, 4]) =", mean(numbers2)); 
  console.log("mean([1, 2, 2]) =", mean(numbers3)); 
  console.log("mean([]) =", mean(emptyArray));      
  
                  