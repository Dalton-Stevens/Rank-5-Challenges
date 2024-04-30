const isSortedAndHow = (arr) => {
  return arr.every((val, index) => index === 0 || val >= arr[index - 1])
    ? "yes, ascending"
    : arr.every((val, index) => index === 0 || val <= arr[index - 1])
    ? "yes, descending"
    : "no";
};

console.log(isSortedAndHow([1, 2]));
console.log(isSortedAndHow([15, 7, 3, -8]));
console.log(isSortedAndHow([4, 2, 30]));
