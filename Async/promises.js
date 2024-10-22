// a new promise object is created when invoking function
function promiseTimeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms); // the promise will be resolved once the timeout has elapsed
  });
}

// the function has operations to either reject or resolve
// older style
promiseTimeout(2000)
  .then(() => {
    console.log("Done");
  })
  .catch(() => {
    console.log("Error");
  });
