// suitable for calling a function which returns false or null when completed

let numberAscending = 1;

while (numberAscending <= 10) {
  console.log(numberAscending);
  numberAscending++;
}

let evenNumber = 2;

while (evenNumber <= 10) {
  console.log(evenNumber);
  evenNumber += 2;
}

let numberDescending = 10;

while (numberDescending >= 1) {
  console.log(numberDescending);
  numberDescending--;
}

const names = ["Justin", "James", "May"];

let whileIndex = 0;

while (whileIndex < names.length) {
  const name = names[whileIndex];
  console.log(name);
  whileIndex++;
}
