function addNumbers(a, b) {
    
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new TypeError("Inputs must be numbers");
    }
  
   
    const sum = a + b;
    return sum;
  }
  
  
  try {
    const result = addNumbers(10, 20);
    console.log(result); 
  } catch (error) {
    console.error(error.message); 
  }
  
  
  try {
    addNumbers(10, '20');
  } catch (error) {
    console.error(error.message); 
  }
  