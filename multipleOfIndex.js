const multipleOfIndex = (arr) => {
  return arr.filter(
    (element, index) => element === 0 || (index !== 0 && element % index === 0)
  );
};

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]));
console.log(multipleOfIndex([0, 2, 3, 6, 9]));
