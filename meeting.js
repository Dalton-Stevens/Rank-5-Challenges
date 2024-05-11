const meeting = (str) => {
  return str
    .split(";")
    .map((name) => name.split(":"))
    .map(([first, last]) => `(${last.toUpperCase()}, ${first.toUpperCase()})`)
    .sort((a, b) => a.localeCompare(b))
    .join("");
};

console.log(
  meeting(
    "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"
  )
);
