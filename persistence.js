const persistence = (num) => {
  if (num < 10) {
    return 0;
  } else {
    let numStr = num.toString();
    let product = 1;

    for (let digit of numStr) {
      product *= parseInt(digit);
    }

    return 1 + persistence(product);
  }
};

console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(999));
