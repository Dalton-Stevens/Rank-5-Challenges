const minValue = (values) => {
  return parseInt([...new Set(values)].sort((a, b) => a - b).join(""));
};

console.log(minValue([1, 3, 1]));
console.log(minValue([4, 7, 5, 7]));
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]));
