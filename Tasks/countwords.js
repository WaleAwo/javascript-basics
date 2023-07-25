// count the number of times each word appears in a string

function countWords(sentence) {
  const wordCount = {};
  const words = sentence.split(/\s+/);

  for (const word of words) {
    const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, "");
    if (cleanedWord !== "") {
      wordCount[cleanedWord] = (wordCount[cleanedWord] || 0) + 1;
    }
  }

  return wordCount;
}

const sentence = "The quick brown fox jumps over the lazy dog";
const wordCounts = countWords(sentence);

// Print the word counts
for (const word in wordCounts) {
  console.log(`${word}: ${wordCounts[word]}`);
}
