const extractDomainName = (url) => {
  return url.match(/^(?:https?:\/\/)?(?:www\.)?([^\/]+)/)[1].split(".")[0];
};

console.log(extractDomainName("http://google.com"));
console.log(extractDomainName("https://youtube.com"));
