for (let number = 1; number <= 10; number++) {
  if (number === 5) break; // 'break' when condition is met
  console.log(number);
}

for (let number = 1; number <= 10; number++) {
  if (number === 5) continue; // 'skip' when condition is met
  console.log(number);
}

for (let number = 1; number <= 10; number++) {
  if (number === 5 || number === 8 || number === 9) continue; // skip 5, 8 and 9
  console.log(number);
}
