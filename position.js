const position = (letter) => {
  return `Position of alphabet: ${letter.toUpperCase().charCodeAt(0) - 65 + 1}`;
};

console.log(position("a"));
console.log(position("z"));
console.log(position("e"));
