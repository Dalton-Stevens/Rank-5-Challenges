const listSquared = (m, n) => {
  function getDivisorsSum(num) {
    let sum = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        sum += i * i;
        if (num / i !== i) {
          sum += (num / i) * (num / i);
        }
      }
    }
    return sum;
  }

  function isSquare(num) {
    return Math.sqrt(num) % 1 === 0;
  }

  const result = [];
  for (let i = m; i <= n; i++) {
    const sum = getDivisorsSum(i);
    if (isSquare(sum)) {
      result.push([i, sum]);
    }
  }
  return result;
};

console.log(listSquared(1, 250));
console.log(listSquared(42, 250));
console.log(listSquared(250, 500));
