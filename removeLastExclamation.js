const removeLastExclamation = (str) => {
  return str.replace(/!$/, "");
};

console.log(removeLastExclamation("Hi!"));
console.log(removeLastExclamation("Hi!!!"));
console.log(removeLastExclamation("!Hi"));
console.log(removeLastExclamation("Hi! Hi!"));
