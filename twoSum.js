const twoSum = (nums, target) => {
  const numIndices = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in numIndices) {
      return [numIndices[complement], i];
    }

    numIndices[nums[i]] = i;
  }
};

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([1234, 5678, 9012], 14690));
console.log(twoSum([2, 2, 3], 4));
