// find the index position of a word in a string

function findWord(haystack, needle) {
  return haystack.indexOf(needle);
}

const haystack = "butsad";
const needle = "sad";
const index = findWord(haystack, needle);

console.log(index);
