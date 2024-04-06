const capitalize = (str) => {
  let evenChars = "";
  let oddChars = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      evenChars += str[i].toUpperCase();
      oddChars += str[i];
    } else {
      evenChars += str[i];
      oddChars += str[i].toUpperCase();
    }
  }

  return [evenChars, oddChars];
};

console.log(capitalize("abcdef"));
