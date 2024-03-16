const fixStringCase = (str) => {
  let lowercaseCount = 0;
  let uppercaseCount = 0;

  for (let char of str) {
    if (char === char.toUpperCase()) {
      uppercaseCount++;
    } else {
      lowercaseCount++;
    }
  }

  if (uppercaseCount === lowercaseCount || lowercaseCount > uppercaseCount) {
    return str.toLowerCase();
  } else {
    return str.toUpperCase();
  }
};

console.log(fixStringCase("CODe"));
console.log(fixStringCase("COde"));
console.log(fixStringCase("Code"));
