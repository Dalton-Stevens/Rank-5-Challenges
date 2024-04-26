const race = (v1, v2, g) => {
  if (v1 >= v2) return null;

  let timeInSeconds = (g * 3600) / (v2 - v1);

  let hours = Math.floor(timeInSeconds / 3600);
  let minutes = Math.floor((timeInSeconds % 3600) / 60);
  let seconds = Math.floor(timeInSeconds % 60);

  return [hours, minutes, seconds];
};

console.log(race(720, 850, 70));
console.log(race(80, 91, 37));
console.log(race(80, 100, 40));
