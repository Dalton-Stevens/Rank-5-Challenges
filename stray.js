const stray = (arr) => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result ^= arr[i];
  }

  return result;
};

console.log(stray([1, 1, 2]));
console.log(stray([1, 3, 1]));
console.log(stray([1, 1, 2, 3, 3]));
