const nearestSq = (num) => {
  return Math.pow(Math.round(Math.sqrt(num)), 2);
};

console.log(nearestSq(1));
console.log(nearestSq(10));
console.log(nearestSq(111));
