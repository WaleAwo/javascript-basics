let phrase = "CBA";
let stringLength = phrase.length;

for (let i = 0; i < stringLength - 1; i++) { // -1 to not check the last character 
  if (phrase[i] > phrase[i + 1]) {
    console.log("Not in alphabetical order");
    return 0;
  }
}
console.log("Alphabetical order");
