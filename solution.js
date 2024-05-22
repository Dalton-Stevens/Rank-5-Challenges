const solution = (str) => {
  return str.replace(/([a-z])([A-Z])/g, "$1 $2");
};

console.log(solution(""));
console.log(solution("camelCasing"));
console.log(solution("camelCasingTest"));
