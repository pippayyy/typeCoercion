//Basic Equality Comparison
// Challenge: Predict the output of each comparison below.
console.log('10' == 10);  // true
console.log('10' === 10); // false
console.log(false == 0);  // true
console.log(false === 0); // false


//Type Conversion in Equality
// Challenge: Compare variables with == and === to see the difference.
let a = '5';
let b = 5;

console.log(a == b);   // true
console.log(a === b);  // false
console.log(a + b == 10); // false
console.log(a + b === 10); // false


// Falsy Comparison with Loose Equality
// Challenge: Predict the output based on JavaScript's concept of falsy values.
let x = null;
let y = undefined;
let z = '';

console.log(x == y);   // true
console.log(y == z);   // false
console.log(z == false); // true


// Challenge: Guess the output and reason through the coercion rules JavaScript applies here.
let arr = [1, 2];
let obj = { a: 1, b: 2 };

console.log(arr == '1,2');    // true
console.log(arr === '1,2');   // false
console.log(obj == '[object Object]'); // true
console.log(obj === '[object Object]'); // false
console.log([] == false);     // true
console.log({} == false);     // false




