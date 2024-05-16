const removeSmallest = (arr) => {
  if (arr.length === 0) {
    return [];
  }

  let minIndex = 0;
  let minValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minIndex = i;
      minValue = arr[i];
    }
  }

  return arr.slice(0, minIndex).concat(arr.slice(minIndex + 1));
};

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
console.log(removeSmallest([]));
