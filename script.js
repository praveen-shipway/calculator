function add(a, b) {
	return a + b;
}
function subtract(a, b) {
	return a - b;
}
function multiply(a, b) {
	return a * b;
}
function divide(a, b) {
	return a / b;
}

function operate(operator, num1, num2) {
	if (operator == '+') {
		return add(num1, num2);
	} else if (operator == '-') {
		return subtract(num1, num2);
	} else if (operator == '*') {
		return multiply(num1, num2);
	} else if (operator == '/') {
		return divide(num1, num2);
	}
}

let num1, op, num2;

let numbers = document.getElementById('numbers');
let operator = document.getElementById('operator');
let display = document.getElementById('display');
let clear = document.getElementById('clear');

numbers.addEventListener('click', function (e) {
	if (e.target.tagName === 'DIV') {
		return;
	}
	if (display.textContent == '0' || num1) {
		display.textContent = e.target.textContent;
	} else {
		display.textContent += e.target.textContent;
	}
});

operator.addEventListener('click', function (e) {
	if (e.target.tagName === 'DIV') {
		return;
	}
	if (e.target.textContent == '=') {
		num2 = display.textContent;
		display.textContent = operate(op, +num1, +num2);
		num1 = num2 = op = null;
	} else {
		if (op) {
			num2 = display.textContent;
			num1 = operate(op, +num1, +num2);
			op = e.target.textContent;
			display.textContent = num1;

		} else {
			num1 = display.textContent;
			op = e.target.textContent;
			display.textContent = '';
		}
	}
});

clear.addEventListener('click', function (e) {
	display.textContent = '0';
	num1 = num2 = op = null;
});
