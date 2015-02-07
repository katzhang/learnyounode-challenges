var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
	var output = [];
	fs.readdir(dir, function(err, files) {
		if (err) {
			return callback(err);
		} else {
			files.forEach(function(file, index, array) {
				if (path.extname(file) === '.' + ext) {
					output.push(file);
				}
			});
			callback(null, output);
		}
	});
};