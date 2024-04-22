const addLength = (str) => {
  return str.split(" ").map((word) => `${word} ${word.length}`);
};

console.log(addLength("apple ban"));
console.log(addLength("hello world"));
