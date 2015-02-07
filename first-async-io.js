var fs = require('fs');
var filePath = process.argv[2];
fs.readFile(filePath, function(err, data) {
	var file;
	if (err) {
		console.log('an error occured!');
		return;
	} else {
		file = data.toString();
		console.log(file.split('\n').length - 1);
	}
});