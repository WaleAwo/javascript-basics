// create a new array
const cars = ["Tesla", "BMW", "Audi"];

// print array all values
console.log(cars);

// print a value based on index position
console.log(cars[1]);

// replace a value based on index position
cars[0] = "Toyota";
console.log(cars);

// get array length
const totalCars = cars.length;
console.log(totalCars);

// loop through array 
for (car of cars) {
  console.log(car);
}

// store objects in an array
const personOne = { name: "James" };
const personTwo = { name: "Mary" };
const personThree = { name: "Lucy" };

const people = [personOne, personTwo, personThree];
console.log(people[0].name);
