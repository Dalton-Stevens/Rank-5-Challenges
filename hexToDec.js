const hexToDec = (hexString) => {
  return parseInt(hexString, 16);
};

console.log(hexToDec("1"));
console.log(hexToDec("a"));
console.log(hexToDec("FF"));
