/*
- collection of unique values
- each value can only occur once
- the value can be of any type, primitive values or objects
*/

// create
const letters = new Set(["a", true, null, 3]);

// add
letters.add("d");

// loop
for (const letter of letters) {
  console.log(letter);
}

// returns 'true' if a specified value exists in a set
answer = letters.has("d");
console.log(answer);

// remove
letters.delete(3);
for (const letter of letters) {
  console.log(letter);
}
