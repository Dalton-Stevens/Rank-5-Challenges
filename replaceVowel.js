const replaceVowel = (str) => {
  return str.replace(/[aeiou]/gi, "!");
};

console.log(replaceVowel("Hi!"));
console.log(replaceVowel("aeiou"));
console.log(replaceVowel("ABCDE"));
