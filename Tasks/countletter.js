// count the number of times a specific character appears in a string

function findLetter(character, string) {
  let count = 0;

  for (const letter of string)
    if (letter === character) {
      count++;
    }
  return count;
}

const sentence = "this is a sentence";
const letter = "e";

const number = findLetter(letter, sentence);
console.log(`The letter ${letter} appears ${number} times`);
