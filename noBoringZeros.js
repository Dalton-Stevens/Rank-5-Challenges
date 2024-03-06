const noBoringZeros = (num) => {
  return +num.toString().replace(/0+$/, "");
};

console.log(noBoringZeros(1450));
console.log(noBoringZeros(960000));
console.log(noBoringZeros(1050));
