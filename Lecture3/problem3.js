const server = require('http').createServer();
const fs = require('fs');

const path = require('path');
server.on('request' , (req , res) =>  {
    res.writeHead(200 , {'Content-Type' : 'text/plain'});
    // var content = fs.readFileSync('student.txt');

    // fs.readFile('student.txt', (err , data) => {res.end(data)});

    var readable = fs.createReadStream(path.join(__dirname , 'student.txt') , "utf8");
    readable.on('data', (chunck) => res.write(chunck));
    
});

server.listen(4000);
