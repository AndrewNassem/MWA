const http = require('http');
var fs = require('fs');
var path =   require('path');


process.on('message' , (param) => {
    var readable = fs.createReadStream(path.join(__dirname ,param) , 'utf8');
    readable.on('data', function(chunck){
        process.send(chunck);
    })
    // process.send("end");
});
