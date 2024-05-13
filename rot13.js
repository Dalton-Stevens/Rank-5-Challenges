const rot13 = (str) => {
  return str.replace(/[a-zA-Z]/g, function (c) {
    let base = c <= "Z" ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
  });
};

console.log(rot13("WdM5Fs]%Z?GRA"));
