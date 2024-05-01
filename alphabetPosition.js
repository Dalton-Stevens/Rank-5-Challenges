const alphabetPosition = (str) => {
  const regStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

  let result = "";

  for (let i = 0; i < regStr.length; i++) {
    const char = regStr.charCodeAt(i);

    if (char >= 97 && char <= 122) {
      result += char - 96 + " ";
    }
  }

  return result.trim();
};

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));
