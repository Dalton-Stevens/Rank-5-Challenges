const correctString = (str) => {
  return str.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");
};

console.log(correctString("L0ND0N"));
console.log(correctString("DUBL1N"));
console.log(correctString("51NGAP0RE"));
