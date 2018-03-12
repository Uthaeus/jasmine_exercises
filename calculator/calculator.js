function add (num1, num2) {
	return num1 + num2
}

function subtract (num1, num2) {
	return num1 - num2
}

function sum (arr) {
	if (arr.length == 0) {
		return 0;
	} else if (arr.length == 1) {
		return arr[0];
	} else {
		const sum = arr.reduce((total, amount) => total + amount);
		return sum;
	}
}

function multiply (arr) {
	if (arr.length == 0) {
		return 0;
	} else if (arr.length == 1) {
		return arr[0];
	} else {
		var total = 1;
		for (var i = 0; i < arr.length; i++) {
			total *= arr[i];
		}
		return total;
	}
}

function power(num1, num2) {
	return num1 ** num2;
}

function factorial(num) {
	if (num == 0 || num == 1) {
		return 1;
	} else {
		var total = 1;
		for (var i = 1; i <= num; i++) {
			total *= i;
		}
		return total;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}