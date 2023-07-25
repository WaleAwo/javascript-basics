// reverse a string

function reverseWord(word) {
  return word.trim().split("").reverse().join("");
}

const originalString = "Elephant";
const reversedString = reverseWord(originalString);
console.log(reversedString);
