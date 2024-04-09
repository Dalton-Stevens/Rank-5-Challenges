const humanCatDogYears = (humanYears) => {
  let catYears = 0;
  let dogYears = 0;

  if (humanYears >= 1) {
    catYears += 15;
    dogYears += 15;
  }

  if (humanYears >= 2) {
    catYears += 9;
    dogYears += 9;
  }

  if (humanYears > 2) {
    catYears += (humanYears - 2) * 4;
    dogYears += (humanYears - 2) * 5;
  }

  return [humanYears, catYears, dogYears];
};

console.log(humanCatDogYears(1));
console.log(humanCatDogYears(2));
console.log(humanCatDogYears(10));
