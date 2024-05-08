const towerBuilder = (floors) => {
  const tower = [];
  const maxWidth = floors * 2 - 1;

  for (let i = 1; i <= floors; i++) {
    const width = i * 2 - 1;
    const spaces = " ".repeat((maxWidth - width) / 2);
    const stars = "*".repeat(width);
    const row = spaces + stars + spaces;
    tower.push(row);
  }

  return tower;
};

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));
