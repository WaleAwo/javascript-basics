//double the numbers
let sizeOfArray = 7;
let sequence = new Array(sizeOfArray);

sequence[0] = 1;
console.log(sequence[0]);

for (let i = 1; i < sizeOfArray; i++) {
  sequence[i] = sequence[i - 1] * 2;
  console.log(sequence[i]);
}
