// check if a letter exists in a string

function findLetter(character, string) {
  let isLetterFound = false;

  for (const letter of string) {
    if (letter.toLowerCase() === character.toLowerCase()) {
      isLetterFound = true;
      break;
    }
  }

  return isLetterFound;
}

const word = "elephant";
const letter = "u";
const isLetterFound = findLetter(letter, word);

console.log(`Is the letter ${letter} found in ${word}: ${isLetterFound}`);
