const highest = (str) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let maxScore = 0;
  let highestWord = "";

  let wordArr = str.split(" ");

  for (const word of wordArr) {
    let score = 0;

    for (const char of word) {
      score += alphabet.indexOf(char) + 1;
    }

    if (score > maxScore) {
      maxScore = score;
      highestWord = word;
    }
  }

  return highestWord;
};

console.log(highest("man i need a taxi up to ubud"));
console.log(highest("what time are we climbing up the volcano"));
console.log(highest("aa b"));
