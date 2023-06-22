// create a new array
let cars = ["Tesla", "BMW", "Audi"];

// print array all values
console.log(cars);

// print a value based on index position
console.log(cars[1]);

// replace a value based on index position
cars[0] = "Toyota";
console.log(cars);

// get array length
let totalCars = cars.length;
console.log(totalCars);

// loop through array - option 1
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// loop through array - option 2 (recommended)
for (car of cars) {
  console.log(car);
}

// store objects in an array
let personOne = { name: "James" };
let personTwo = { name: "Mary" };
let personThree = { name: "Lucy" };

let people = [personOne, personTwo, personThree];
console.log(people[0].name);
