var net = require('net');
var strftime = require('strftime');
var port = process.argv[2];

net.createServer(function(socket) {
	var output = strftime('%F %R', new Date());
	socket.end(output + '\n');
}).listen(port);