var http = require('http');
var map = require('through2-map');
var port = process.argv[2];

http.createServer(function(req, res) {
	if (req.method != 'POST') {
		return res.end('send me a post');
	}

	req.pipe(map(function(data) {
		return data.toString().toUpperCase();
	})).pipe(res);
}).listen(port);