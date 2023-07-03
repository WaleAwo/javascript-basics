// 'break' to exit a loop
for (let number = 1; number <= 10; number++) {
  if (number === 5) break; // stop at 4
  console.log(number);
}

// 'continue' to skip an item in a loop
for (let number = 1; number <= 10; number++) {
  if (number === 5) continue; // skip 5
  console.log(number);
}

// skip multiple items in a loop using 'continue'
for (let number = 1; number <= 10; number++) {
  if (number === 5 || number === 8 || number === 9) continue; // skip 5, 8 and 9
  console.log(number);
}
