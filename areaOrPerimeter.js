const areaOrPerimeter = (length, width) => {
  return length === width ? length * width : 2 * (length + width);
};

console.log(areaOrPerimeter(3, 3));
console.log(areaOrPerimeter(6, 10));
