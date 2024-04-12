const sortArray = (arr) => {
  const odd = arr.filter((num) => num % 2 !== 0).sort((a, b) => a - b);

  return arr.map((num) => (num % 2 !== 0 ? odd.shift() : num));
};

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
