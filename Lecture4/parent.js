var http = require('http');
var queryString = require('querystring');
var { fork } = require('child_process');

var url = require('url');
var server = http.createServer();

server.on('request', (req, res) => {

    var query = url.parse(req.url, true).query;
    console.log(query.fileName);

    const child = fork('child.js');
    child.send(query.fileName);
    child.on('message', childRes => {
        // if (childRes != 'end')
        console.log(childRes)
            res.write(childRes)
        // else {
        //     res.end();
        // }
    });
});

server.listen(4000);