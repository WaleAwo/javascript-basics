function promiseTimeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

async function longRunningOperation() {
  return 42;
}

// async function that has await operations
async function run() {
  console.log("Start!!");

  await promiseTimeout(2000); // waits for the promiseTimeout function to complete before proceeding

  const response = await longRunningOperation(); // only printed after promise is resolved
  console.log(response);

  console.log("Stop!!");
}

run();
