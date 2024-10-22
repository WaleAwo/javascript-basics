// no parameters + no return value
function simpleGreeting() {
  console.log("Good morning!");
}

simpleGreeting();

// no parameters + return value
function returnGreeting() {
  return "Good morning to you!";
}

const output = returnGreeting();
console.log(output);

// parameters + no return
function nameGreeting(name) {
  console.log("Hello " + name);
}

nameGreeting("John");

// parameters + return value
function returnNameGreeting(firstname, lastname) {
  return console.log(`Hello ${firstname} ${lastname}`);
}

returnNameGreeting("John", "Doe");
