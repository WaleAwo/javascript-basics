// get the first letter from a string
function firstLetter(string) {
  const letterSplit = string.trim().split("");

  return letterSplit[0];
}

const word = "elephant";
const index = firstLetter(word);

console.log(`The first letter is: ${index}`);
