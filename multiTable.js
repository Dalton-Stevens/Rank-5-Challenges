const multiTable = (num) => {
  let table = "";

  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${num} = ${i * num}`;

    if (i !== 10) {
      table += "\n";
    }
  }

  return table;
};

console.log(multiTable(5));
console.log(multiTable(1));
