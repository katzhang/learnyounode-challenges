var fs = require('fs');
var filePath = process.argv[2];
var file = fs.readFileSync(filePath).toString();
var arr = file.split('\n');
console.log(arr.length - 1);
