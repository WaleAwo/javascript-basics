// 2 suitable scenarios
// looping through a known number of times
// looping through an array or collection

for (let number = 1; number <= 10; number++) {
  console.log(number);
}

for (let evenNumber = 2; evenNumber <= 10; evenNumber += 2) {
  console.log(evenNumber);
}

for (let numberDescending = 10; numberDescending >= 1; numberDescending--) {
  console.log(numberDescending);
}

// for..of
const names = ["Justin", "Sarah", "Christopher"];
for (let name of names) {
  console.log(name);
}
