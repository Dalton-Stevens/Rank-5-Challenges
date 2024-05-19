const flattenAndSort = (arr) => {
  return arr.flat().sort((a, b) => a - b);
};

console.log(flattenAndSort([[], [1]]));
console.log(
  flattenAndSort([
    [3, 2, 1],
    [7, 9, 8],
    [6, 4, 5],
  ])
);
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));
