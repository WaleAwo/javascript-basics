let fullName = "Mark Andrews";
let salutation = "Mr";
let bool = true;

//substitutions
console.log("%s %s", salutation, fullName);

// template literals
console.log(`${salutation} ${fullName}`); // easier to read
console.log(`1 + 1 is ${1 + 1}`); // evaluating expressions
console.log(`The opposite of true is ${!bool}`);

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

// reverse a string
let reverse = fullName.split("").reverse().join("");
console.log(reverse);

// last letter
let fullNameSplit = fullName.split("");
let lastLetter = fullNameSplit[fullNameSplit.length - 1];
console.log(lastLetter);
