var http = require('http');
var dt = require('./myFirstModule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World! The Date and Time are currently: ' + dt.myDateTime());
}).listen(8080);