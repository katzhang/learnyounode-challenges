var http = require('http');
var url = require('url');

http.createServer(function(request, response) {
	var urlObj = url.parse(request.url, true);
	var pathName = urlObj.pathname;
	var query = urlObj.query;
	var output, date;

	if (pathName == '/api/parsetime' && query.hasOwnProperty('iso')) {
		date = new Date(query.iso);
		var hour = date.getHours();
		var minute = date.getMinutes();
		var second = date.getSeconds();
		output = {
			hour: hour,
			minute: minute,
			second: second
		}
	} else if (pathName == '/api/unixtime' && query.hasOwnProperty('iso')) {
		date = new Date(query.iso);
		var unixtime = date.getTime();
		output = {
			unixtime: unixtime
		}
	}

	if (output) {
		response.writeHead(200, {'Content-Type': 'application/json'});
		response.end(JSON.stringify(output));
	} else {
		response.writeHead(404);
		response.end('no output sorry');
	}

}).listen(Number(process.argv[2]));