const maxSequence = (arr) => {
  if (arr.length === 0) return 0;

  let maxSum = 0;
  let currSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currSum = Math.max(0, currSum + arr[i]);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
};

console.log(maxSequence([]));
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
