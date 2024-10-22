// creating an object using a constructor
const data = { title: "1984", author: "George Orwell" };
const book = new Object(data);

// creating a constructor with data and methods
const dataFunction = {
  title: "Becoming",
  author: "Michelle Obama",
  isAvailable: true,
  checkIn: function () {
    this.isAvailable = true;
  },
  checkOut: function () {
    this.isAvailable = false;
  },
};

const bookTwo = new Object(dataFunction);

// dot notation
console.log(bookTwo.author);
bookTwo.author = "M Obama";
console.log(bookTwo);

// bracket notation
console.log(book["author"]);
book["author"] = "G Orwell";
console.log(book);

// using a method on an object
bookTwo.checkOut();
console.log(bookTwo);

bookTwo["checkIn"]();
console.log(bookTwo);
