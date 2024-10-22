// creating an object variable with properties

const person = {
  firstname: "John",
  lastname: "Lee",
  age: 45,
  weight: 70,
  salary: 50000,
  pension: function () {
    return (this.salary * 10) / 100;
  },
};

// accessing object properties
console.log(person.firstname);
console.log(person["lastname"]);

// adding properties to an existing object
person["height"] = 5.5;

// update a property
person.weight = 65;
console.log(person.weight);

// removing a property
delete person["age"];

// using method
const pensionAmount = person.pension();
console.log(pensionAmount);

// loop through object properties and values - for...each
for (x in person) {
  console.log(x); // return all property names
  //   console.log(person[x]); // return all object values
  console.log(x + ": " + person[x]); // return property and value
}
