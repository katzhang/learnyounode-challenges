var http = require('http');
var bl = require('bl');
var args = process.argv;
var urls = [args[2], args[3], args[4]];

function responseHandler(res, callback) {
	var args = Array.prototype.slice.call(arguments);
	args = args.slice(2);
	res.pipe(bl(function(err, data) {
		if (err) {
			callback(err);
		} else {
			data = data.toString();
			console.log(data);
			callback(args);
		}
	}));
}

function httpGet(handler) {
	var url = urls.shift();
	var httpGetFn = function() {
		httpGet(responseHandler);
	};
	if (url) {
		http.get(url, function(res) {
			handler(res, httpGetFn, urls);
		});
	}
}

httpGet(responseHandler);
