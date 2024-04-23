const getSize = (width, height, depth) => {
  let surfaceArea = 2 * (width * height + width * depth + height * depth);

  let volume = width * height * depth;

  return [surfaceArea, volume];
};

console.log(getSize(4, 2, 6));
console.log(getSize(10, 10, 10));
