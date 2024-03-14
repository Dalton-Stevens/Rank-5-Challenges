const order = (words) => {
  if (words === "") {
    return "";
  }

  return words
    .split(" ")
    .sort((a, b) => parseInt(a.match(/\d/)[0]) - parseInt(b.match(/\d/)[0]))
    .join(" ");
};

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));
