//Basic Equality Comparison
// Challenge: Predict the output of each comparison below.
console.log('10' == 10);  // ?
console.log('10' === 10); // ?
console.log(false == 0);  // ?
console.log(false === 0); // ?


//Type Conversion in Equality
// Challenge: Compare variables with == and === to see the difference.
let a = '5';
let b = 5;

console.log(a == b);   // ?
console.log(a === b);  // ?
console.log(a + b == 10); // ?
console.log(a + b === 10); // ?


// Falsy Comparison with Loose Equality
// Challenge: Predict the output based on JavaScript's concept of falsy values.
let x = null;
let y = undefined;
let z = '';

console.log(x == y);   // ?
console.log(y == z);   // ?
console.log(z == false); // ?


// Challenge: Guess the output and reason through the coercion rules JavaScript applies here.
let arr = [1, 2];
let obj = { a: 1, b: 2 };

console.log(arr == '1,2');    // ?
console.log(arr === '1,2');   // ?
console.log(obj == '[object Object]'); // ?
console.log(obj === '[object Object]'); // ?
console.log([] == false);     // ?
console.log({} == false);     // ?


