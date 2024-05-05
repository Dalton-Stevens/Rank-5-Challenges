const nbDig = (n, d) => {
  let count = 0;

  for (let i = 0; i <= n; i++) {
    const square = i * i;
    const digits = String(square).split("");
    const digitCount = digits.reduce(
      (acc, val) => (val === String(d) ? acc + 1 : acc),
      0
    );
    count += digitCount;
  }

  return count;
};

console.log(nbDig(5750, 0));
console.log(nbDig(11011, 2));
console.log(nbDig(12224, 8));
