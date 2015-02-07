var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
dir = path.normalize(dir);
var ext = process.argv[3];

fs.readdir(dir, function(err, files) {
	if (err) {
		throw 'error!';
	} else {
		files.forEach(function(file, index, array) {
			if (path.extname(file) === '.' + ext) {
				console.log(file);
			}
		});
	}
});