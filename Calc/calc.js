var data = prompt('Write your expression. For example "1+2".');
var arr = data.split('');
var sign = '';
var signPosition = '';

for (var i = 0; i < arr.length; i++) {
	switch (arr[i]) {
		case '+':
		case '-':
		case '/':
		case '*':
			sign = arr[i];
			signPosition = i;
			break;
		default:
			break;
	}
}

var firstDigit = parseInt(data);
var secondDigit = +parseInt(data.substring(+signPosition + 1));

switch (sign) {
	case '+':
		var sum = firstDigit + secondDigit;
		alert ("The sum is: " + sum);
		break;
	case '-':
		var diff = firstDigit - secondDigit;
		alert ("The difference is: " + diff);
		break;
	case '/':
		var div = firstDigit / secondDigit;
		alert ("The division is: " + div);
		break;
	case '*':
		var mult = firstDigit * secondDigit;
		alert ("The multiplication is: " + mult);
		break;
	default:
		alert ('Write correct expression, please!');
}
