const incrementString = (str) => {
  const match = str.match(/(\d+)$/);

  if (match) {
    let num = parseInt(match[0]) + 1;

    num = num.toString().padStart(match[0].length, "0");

    return str.slice(0, -match[0].length) + num;
  } else {
    return str + "1";
  }
};

console.log(incrementString("foobar000"));
console.log(incrementString("foobar999"));
console.log(incrementString("foo"));
