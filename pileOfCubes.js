const findNb = (m) => {
  let n = 1;
  let volume = 0;

  while (volume < m) {
    volume += Math.pow(n, 3);

    if (volume === m) {
      return n;
    }
    n++;
  }
  return -1;
};

console.log(findNb(4183059834009));
console.log(findNb(24723578342962));
console.log(findNb(135440716410000));
console.log(findNb(40539911473216));
