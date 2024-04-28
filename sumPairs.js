const sumPairs = (ints, s) => {
  let seen = {};

  for (let i = 0; i < ints.length; i++) {
    let x = s - ints[i];

    if (seen.hasOwnProperty(x)) {
      return [x, ints[i]];
    }

    seen[ints[i]] = i;
  }

  return null;
};

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6));
console.log(sumPairs([20, -13, 40], -7));
