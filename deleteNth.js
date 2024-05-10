const deleteNth = (arr, n) => {
  const occurrences = {};
  const result = [];

  for (const num of arr) {
    occurrences[num] = (occurrences[num] || 0) + 1;

    if (occurrences[num] <= n) {
      result.push(num);
    }
  }

  return result;
};

console.log(deleteNth([20, 37, 20, 21], 1));
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
console.log(deleteNth([12, 39, 19, 39, 39, 19, 12], 1));
