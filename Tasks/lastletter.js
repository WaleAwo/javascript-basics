// get the last letter in a string

function lastLetter(string) {
  const wordSplit = string.split("");
  const letter = wordSplit[wordSplit.length - 1];
  return letter;
}

const word = "ball";
const letter = lastLetter(word);

console.log(`The last letter is: ${letter}`);
