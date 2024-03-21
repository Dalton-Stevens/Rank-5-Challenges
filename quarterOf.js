const quarterOf = (month) => {
  return month <= 3
    ? 1
    : month <= 6
    ? 2
    : month <= 9
    ? 3
    : month <= 12
    ? 4
    : "Not a valid month.";
};

console.log(quarterOf(2));
console.log(quarterOf(5));
console.log(quarterOf(9));
console.log(quarterOf(11));
console.log(quarterOf(15));
