// check whether all the letters in 2 words exists

function checkAnagram(stringOne, stringTwo) {
  // convert to lowercase & trim
  const trimmedStringOne = stringOne.toLowerCase().trim();
  const trimmedStringTwo = stringTwo.toLowerCase().trim();

  // compare the length of each string
  if (trimmedStringOne.length !== trimmedStringTwo.length) {
    return false;
  }

  // Convert the strings to arrays, sort them, and join back into strings
  const sortedStringOne = trimmedStringOne.split("").sort().join("");
  const sortedStringTwo = trimmedStringTwo.split("").sort().join("");

  return sortedStringOne === sortedStringTwo;
}

const wordOne = "army";
const wordTwo = "mary";

const isAnagram = checkAnagram(wordOne, wordTwo);

console.log(`Is ${wordOne} and ${wordTwo} an anagram? ${isAnagram}`);
