let fullName = "Mark Andrews";
let salutation = "Mr";

// string length
confirm.log(fullName.length)

// get character value at index position
console.log(fullName.charAt(3));

// concat 2 or more strings
console.log(salutation.concat(" " + fullName));

// replace a word in a string
let newName = fullName.replace("Andrews", "Baker");
console.log(newName);

// retrieve a subsection of a string
let substringSection = fullName.substring(0, 2);
console.log(substringSection);

// uppercase
console.log(fullName.toUpperCase());

// lowercase
console.log(fullName.toLowerCase());

// split a string
let nameSplit = fullName.split(" ");
console.log(nameSplit);
console.log(nameSplit[0]);
console.log(nameSplit[1]);

// trim white spaces from the beginning and end of a word
let spaces = "   spaces   ";
console.log(spaces.trim());
