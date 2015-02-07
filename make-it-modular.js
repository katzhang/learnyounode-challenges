var filter = require('./filtered-ls-module');

var dir = process.argv[2];
var ext = process.argv[3];

filter(dir, ext, function(err, data) {
	if (err) {
		throw 'error!';
	} else {
		data.forEach(function(file, index) {
			console.log(file);
		});
	}
});