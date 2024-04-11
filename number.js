const number = (arr) => {
  return arr.map((str, index) => `${index + 1}: ${str}`);
};

console.log(number([]));
console.log(number(["a", "b", "c"]));
