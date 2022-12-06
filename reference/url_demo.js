const url = require('url');

const myUrl = new URL("https://chat.openai.com:3000/chat?id=7&page=2");

console.log(myUrl.href);

// root domain
console.log(myUrl.host)

// Host Name
console.log(myUrl.hostname);

// path name
console.log(myUrl.pathname);

// search
console.log(myUrl.search);

// Param Objects
console.log(myUrl.searchParams);

myUrl.searchParams.append('location','Ahmedabad');
console.log(myUrl.searchParams);

myUrl.searchParams.forEach((value,name) => console.log(name, value));
