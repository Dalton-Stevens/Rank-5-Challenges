const queueTime = (customers, n) => {
  let tills = Array(n).fill(0);

  for (let i = 0; i < customers.length; i++) {
    let nextTill = tills.indexOf(Math.min(...tills));
    tills[nextTill] += customers[i];
  }

  return Math.max(...tills);
};

console.log(queueTime([], 1));
console.log(queueTime([1, 2, 3, 4], 1));
console.log(queueTime([2, 2, 3, 3, 4, 4], 2));
console.log(queueTime([1, 2, 3, 4, 5], 100));
