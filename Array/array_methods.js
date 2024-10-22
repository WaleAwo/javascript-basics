// create an array
const fruits = ["Orange", "Banana", "Pear", "Plum"];

// convert to strings separated by commas
console.log(fruits.toString());

// remove the last element from an array
fruits.pop();
console.log(fruits);

// add an element to the end of an array
fruits.push("Cherry");
console.log(fruits);

// remove the first element from the array
fruits.shift();
console.log(fruits);

// add an element to the beginning of the array
fruits.unshift("Lemon");
console.log(fruits);

// remove an element from an array based on index position
delete fruits[2];
console.log(fruits);

// join 2 or more arrays
const arrayOne = [10, 20];
const arrayTwo = [30, 40];
const cars = ["Tesla", "BWM"];

const arrayThree = arrayOne.concat(arrayTwo);
console.log(arrayThree);

const arrayFour = arrayOne.concat(arrayTwo, cars);
console.log(arrayFour);

// create a new array from an existing one staring from a particular index position
const cities = ["London", "Paris", "Mumbai", "New York", "Lagos"];
cities.slice(1);
console.log(cities);

// sort array alphabetically
console.log(cities.sort());

// reverse the values in an array
console.log(cities.reverse());
