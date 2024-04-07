const primeFactors = (n) => {
  const factors = [];

  while (n % 2 === 0) {
    factors.push(2);
    n /= 2;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }

  if (n > 2) {
    factors.push(n);
  }

  const factorCounts = {};
  factors.forEach((factor) => {
    factorCounts[factor] = (factorCounts[factor] || 0) + 1;
  });

  let result = "";
  for (const [factor, count] of Object.entries(factorCounts)) {
    result += `(${factor}${count > 1 ? `**${count}` : ""})`;
  }

  return result;
};

console.log(primeFactors(7775460));
