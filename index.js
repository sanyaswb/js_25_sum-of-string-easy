function sumOfString(str) {
	let result = 0;

	for (let i = 0; i < str.length; i++) {
		result += Number(str[i]);
	}

	return result;
}

module.exports = sumOfString;