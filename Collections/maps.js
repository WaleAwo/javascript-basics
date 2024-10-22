/*
- a Map holds key-value pairs where the keys can be any datatype
- a Map remembers the original insertion order of the keys
*/

// create
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

// add & update
fruits.set("carrot", 250)

// get value
console.log(fruits.get("bananas"))

// size
console.log(fruits.size)

// remove
fruits.delete("carrot")

// returns 'true' if a specified value exists in a set
fruits.has("car")

// loop
for(const fruit of fruits.values()){
    console.log(fruit)
}

// clear map
fruits.clear()
console.log(fruits.size)
