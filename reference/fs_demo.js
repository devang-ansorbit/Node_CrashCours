const path = require("path");
const fs = require("fs");

// fs.mkdir(path.join(__dirname,'/test'),{}, err => {
//     if(err) throw err;
//     console.log('Hurehhh...')
// })

// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello dear world, I need you.', err => {
//     if(err) throw err;
//     console.log('Hello World') ;
// })
// fs.appendFile(path.join(__dirname,'/test','hello.txt'),'Hello dear world.', err => {
//     if(err) throw err;
//     console.log('Hello World') ;
// })

// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8', (err,data)=> {
//     if(err) throw err;
//     console.log(data) ;
// })

fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloworld.txt"),
  (err) => {
    if (err) throw err;
    console.log("hey ! I am Changed");
  }
);
