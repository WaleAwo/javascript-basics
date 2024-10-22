// function that throws an exception
function criticalCode() {
  throw "throwing an exception";
}

// function that displays an exception
function logError(theException) {
  console.log(theException);
}

// try..Catch
try {
  criticalCode();
} catch (ex) {
  console.log("Got an error");
  logError(ex);
}

// try..catch..finally
try {
  criticalCode();
} catch (ex) {
  console.log("Got an error");
  logError(ex);
} finally {
  console.log("This code will always run");
}
