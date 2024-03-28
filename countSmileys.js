const countSmileys = (arr) => {
  const regex = /[:;][-~]?[)D]/;

  let count = 0;

  for (let face of arr) {
    if (regex.test(face)) {
      count++;
    }
  }

  return count;
};

console.log(countSmileys([]));
console.log(countSmileys([":D", ":~)", ";~D", ":)"]));
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]));
