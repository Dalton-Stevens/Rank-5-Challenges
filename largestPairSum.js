const largestPairSum = (nums) => {
  nums.sort((a, b) => b - a);

  return nums[0] + nums[1];
};

console.log(largestPairSum([10, 14, 2, 23, 19]));
console.log(largestPairSum([-100, -29, -24, -19, 19]));
console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2]));
