// find the first non-repeatable letter in a string

function findLetter(string) {
  const letterMap = {};

  for (const letter of string) {
    if (letterMap[letter]) {
      letterMap[letter]++;
    } else {
      letterMap[letter] = 1;
    }
  }

  for (const letter of string) {
    if (letterMap[letter] === 1) {
      return letter;
    }
  }

  return "no non-repeatable letters";
}
const sentence = "find the first non-repeatable letter";
const result = findLetter(sentence);

console.log(`The first non-repeatable letter is: ${result}`);
