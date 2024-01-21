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
	let result;
	if (operator == '+') {
		result = add(num1, num2);
	} else if (operator == '-') {
		result = subtract(num1, num2);
	} else if (operator == '*') {
		result = multiply(num1, num2);
	} else if (operator == '/') {
		result = divide(num1, num2);
	}
	return Math.round(result * 100) / 100;
}

let num1, op, num2;

let numbers = document.getElementById('numbers');
let operator = document.getElementById('operator');
let display = document.getElementById('display');
let clear = document.getElementById('clear');
let deleteBtn = document.getElementById('delete');

numbers.addEventListener('click', function (e) {
	if (e.target.tagName === 'DIV') {
		return;
	}
	if (display.textContent == '0' || num1) {
		display.textContent = e.target.textContent;
	} else {
		display.textContent += e.target.textContent;
	}
	let numberDot = Array.from(numbers.querySelectorAll('button')).find(number => (number.textContent === '.') ? true : false);
	if (display.textContent.includes('.')) {
		numberDot.setAttribute('disabled', true);
	} else {
		numberDot.removeAttribute('disabled');
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

deleteBtn.addEventListener('click', function (e) {
	let currentDisplay = display.textContent;
	if (currentDisplay.length === 1) {
		display.textContent = '0';
	} else {	
		display.textContent = currentDisplay.slice(0, currentDisplay.length - 1);
	}
});
