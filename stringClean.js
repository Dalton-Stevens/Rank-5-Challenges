const stringClean = (str) => {
  return str.replace(/[0-9]/g, "");
};

console.log(stringClean("! !"));
console.log(stringClean("123456789"));
console.log(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"));
