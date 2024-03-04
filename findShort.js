const findShort = (str) => {
  return str.split(" ").reduce((shortest, word) => {
    return Math.min(shortest, word.length);
  }, Infinity);
};

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  )
);
console.log(findShort("Let's travel abroad shall we"));
