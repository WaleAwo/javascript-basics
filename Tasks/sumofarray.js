// get the sum of an array of numbers

function sumArrayElements(arr) {
  let sum = 0;

  for (const num of arr) {
    sum += num;
  }

  return sum;
}

const numberArray = [1, 2, 3, 4, 5];
const result = sumArrayElements(numberArray);
console.log(`Total number is: ${result}`);
