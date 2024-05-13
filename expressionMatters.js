const expressionMatters = (a, b, c) => {
  const expressions = [
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c,
  ];

  return Math.max(...expressions);
};

console.log(expressionMatters(2, 1, 2));
console.log(expressionMatters(2, 1, 1));
console.log(expressionMatters(1, 1, 1));
