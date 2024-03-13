const reverseStrings = (str) => {
  return str
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .reverse()
    .join("");
};

console.log(reverseStrings("krishan"));
console.log(reverseStrings("ultr53o?n"));
console.log(reverseStrings("ab23c"));
