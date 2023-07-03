// JavaScript object to JSON formatted text string = SERIALIZATION
// JSON formatted text string to JavaScript object = DESERIALIZATION

// a JavaScript object
const book = new Object({ title: "1984", author: "George Orwell" });

// a collection of JavaScript objects
const bookCollection = [
  new Object({ title: "1984", author: "George Orwell" }),
  new Object({ title: "Becoming", author: "Michelle Obama" }),
  new Object({ title: "Snow Crash", author: "Neal Stephenson" }),
];

// Serialization
const bookJSON = JSON.stringify(book);
const bookCollectionJSON = JSON.stringify(bookCollection);

// Deserialization
const bookJSONParsed = JSON.parse(bookJSON);
console.log("Title of book one: " + bookJSONParsed.title);

const bookCollectionJSONParsed = JSON.parse(bookCollectionJSON);
console.log("Author of book 2: " + bookCollectionJSONParsed[1].author);
console.log("Number of items: " + bookCollectionJSONParsed.length);
