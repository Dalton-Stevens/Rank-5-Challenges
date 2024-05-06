const sumArray = (arr) => {
  if (!arr || !Array.isArray(arr) || arr.length <= 1) {
    return 0;
  }

  return arr
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, curr) => acc + curr, 0);
};

console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([3]));
console.log(sumArray([3, 5]));
console.log(sumArray([6, 2, 1, 8, 10]));
