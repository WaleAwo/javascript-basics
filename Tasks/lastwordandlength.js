// find the last word in a string
// find the length of the last word in a string

function lengthAndLastWord(str) {
  const words = str.split(" ");

  const lastWord = words[words.length - 1];

  const lastWordLength = lastWord.length;

  return { lastWord, lastWordLength }; // return an object
}

const word = "Hello world";
const { lastWord, lastWordLength } = lengthAndLastWord(word);

console.log(`Last word: ${lastWord}`);
console.log(`Last word length: ${lastWordLength}`);
