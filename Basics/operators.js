// ARITHMETIC
// + - * ** / % ++ (increment) -- (decrement)

// ASSIGNMENT
// = += -= *= /= %=

// COMPARISON - RETURNS EITHER TRUE OR FALSE
// > < >= <= ? == === != !==
// == - checks for equality regardless of data type
// === - checks for equal values and data type*
// != - checks for non-equality regardless of data type
// !== - checks for non-equal values and data types*

// LOGICAL
// && (and) || (or) ! (not)

let x = 10,
  y = 20;

console.log(x < y ? x : y); // if the statement is true the value of 'x' is printed, otherwise the value of 'y' is printed

let a = true;
let b = false;

console.log(a && b); // both have to be true to return true
console.log(a || b); // only one has to be true to return true
console.log(!a); // returns the reverse
