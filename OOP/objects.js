// creating an object with properties

let person = {
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
console.log(person["lastname"]);
console.log(person.firstname);

// adding properties to an existing object
person["height"] = 5.5;

// update a property
person.weight = 65;
console.log(person.weight);

// removing a property
delete person["age"];

// using method
let pensionAmount = person.pension();
console.log(pensionAmount);

// loop through an object properties and values
for (x in person) {
  //   console.log(x); // return all property names
  //   console.log(person[x]); // return all object values
  console.log(x + ": " + person[x]); // return property and value
}
