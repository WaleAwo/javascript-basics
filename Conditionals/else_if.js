const codeStatus = 200;

if (codeStatus === 200) {
  console.log("OK");
} else if (codeStatus === 400) {
  console.log("Error");
} else {
  console.log("Unknown status");
}

// ternary
const message = codeStatus === 400 ? "OK" : "Error";
console.log(message);
