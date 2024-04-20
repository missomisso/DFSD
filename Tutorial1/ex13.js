//using temporary variable

let a = 5;
let b = 10;

//Method 1
let c = a;
a = b ;
b = c ;


//Method 2
//swapping arithmatic

a = a + b; //15
b = a - b; //5
a = a - b; //15 - 5 = 10

console.log(`Before Swapping a = ${a} and b = ${b}`)