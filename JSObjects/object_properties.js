let person = { firstname: "John", lastname: "Doe", age: 23, weight: 60 };

// add
person["height"] = 5.8;
person.build = "slim";

// update
person.age = 25;

// remove
person.weight;

// access
console.log(person.firstname);
console.log(person["age"]);

// loop through property
for (const value in person) {
 console.log(`${value} : ${person[value]}`)
}
