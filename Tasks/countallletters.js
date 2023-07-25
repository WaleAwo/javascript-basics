// count all characters in a string

function countCharacters(string) {
  const stringWithoutSpaces = string.trim().split("");

  const number = stringWithoutSpaces.length;

  return number;
}

const word = "elephant";
const number = countCharacters(word);

console.log(`The number of characters is: ${number}`);
