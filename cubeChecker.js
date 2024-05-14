const cubeChecker = (volume, side) => {
  if (volume <= 0 || side <= 0) {
    return false;
  }

  let potentialSide = Math.cbrt(volume);

  return Number.isInteger(potentialSide) && potentialSide === side;
};

console.log(cubeChecker(8, 3));
console.log(cubeChecker(8, 2));
console.log(cubeChecker(0, 0));
