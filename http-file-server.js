var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var filePath = process.argv[3];

http.createServer(function(request, response) {
	var rs = fs.createReadStream(filePath);
	rs.pipe(response);
}).listen(port);
