const abbrevName = (name) => {
  return (
    name
      .split(" ")
      .map((x) => x[0].toUpperCase())
      .join(".") + ""
  );
};

console.log(abbrevName("Burton Guster"));
console.log(abbrevName("mike jones"));
console.log(abbrevName("billy Bob"));
