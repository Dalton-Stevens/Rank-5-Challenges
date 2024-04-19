const findAverage = (nums) => {
  return nums.reduce((acc, curr) => acc + curr, 0) / nums.length;
};

console.log(findAverage([1]));
console.log(findAverage([1, 3, 5, 7]));
