// a sample function that throws an exception
function criticalCode() {
  throw "throwing an exception";
}

// a sample function that displays an exception
function logError(theException) {
  console.log(theException);
}

// Try..Catch
try {
  criticalCode();
} catch (ex) {
  // catches error
  console.log("Got an error");
  logError(ex); // displays error
}

// Try..Catch..Finally
try {
  criticalCode();
} catch (ex) {
  // catches error
  console.log("Got an error");
  logError(ex); // displays error
} finally {
  console.log("This code will always run");
}
