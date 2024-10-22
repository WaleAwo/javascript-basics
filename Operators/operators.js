let a = 10;
let b = 2; 

// arithmetic
console.log("Addition: " + (a+b))
console.log("Subtraction: " + (a-b))
console.log("Multiplication: " + (a*b))
console.log("Division: " + (a/b))
console.log("Remainder: " + (a%b)) // returns remainder

// assignment
console.log("Addition: " + (a+=5))
console.log("Subtraction: " + (a-=5))
console.log("Multiplication: " + (a*=5))
console.log("Division: " + (a/=5))
console.log("Remainder: " + (a%=5))

// relational/comparison
console.log("Greater than: " + (a>b))
console.log("Greater than or equal to: " + (a>=b))
console.log("Less than: " + (a<b))
console.log("Less than or equal to: " + (a<=b))
console.log("Not equal to: " + (a!=b))
console.log("Equal to: " + (a==b))

// logical
let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse); 
console.log(isTrue || isFalse); 
console.log(!isTrue); 