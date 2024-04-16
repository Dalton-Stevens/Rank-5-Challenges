const century = (year) => {
  if (year % 100 === 0) {
    return year / 100;
  } else {
    return Math.floor(year / 100) + 1;
  }
};

console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
