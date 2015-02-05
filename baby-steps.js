var sum = 0;

//http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

process.argv.forEach(function(val, index, array) {
	if (index !== 0 && index !== 1 && isNumber(val)) {
		val = Number(val);
		sum += val;
	}
});

console.log(sum);