
const http = require ('http');

//  Create Server Object 

http.createServer( (req, res) => {
    res.write('hello world, I need you we are best together');
    res.end();
}).listen(3000, () =>  console.log("Server is running ..."))