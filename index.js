// const Person = require("./person");

// const per1 = new Person('Devang Patel',34,'devang.patel@ansorbit.com')
// per1.greeting();

// const Logger = require("./reference/logger");

// const logger = new Logger();

// logger.on('message', (data) => console.log('Called Listener:', data));

// logger.logmon( 'Hello world');

const path = require("path");
const fs = require("fs");
const http = require("http");
const { rejects } = require("assert");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "/public", "index.html"), (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  };

  if(req.url === "/api/users") {
    const users = [
      { name :'Devang Patel', age : 23},
      {name : 'Sagar Gohel', age : 22},
      {name : 'Akhil Gothi', age : 21}
    ] ;
    res.writeHead(200,{ 'Content-Type' : 'application/json'});
    res.end(JSON.stringify(users)); 
  }

  // Build the Path
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

  let extName = path.extname(filePath);

  let contentType = 'text/html'

  // Check ext  and set content type
  switch (extName)  {
    case '.js' : 
      contentType = 'text/javascript';
      break;
    case '.css' :
      contentType = 'text/css';
      break;
    case '.json'  :
      contentType = 'application/json';
      break;
    case '.jpg' :
      contentType = 'image/jpeg';
      break;
    case '.png' :
      contentType = 'image/png';
      break;  
  }

  // read File
  fs.readFile(filePath, (err, data) => {
    if (err)  {
      // Page Not Found Error
      if(err.code === 'ENOENT') {
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data) => {
          res.writeHead(200, {'Contetn-Type' : 'text/html'});
          res.end(data, 'utf-8');
        })
      }else {
        // Servor side error
        res.writeHead(500);
        res.end(`Server Error : ${err.code}`)
      }
    } else {
      // Success Response 
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data, 'utf-8')
    }

  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log("Sever is running on port :", PORT));
