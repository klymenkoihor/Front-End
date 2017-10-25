var data = prompt('Write your expression');
var arr = data.split('');
var sight = '';
var position = '';
var firstDigit = '';
var secondDigit = '';

for (i = 0; i < arr.length; i++) {
	switch (arr[i]) {
		case '+':
		case '-':
		case '/':
		case '*':
			sight = arr[i];
			position = i;
			break;
		default:
			continue;
	}
}

firstDigit = +data.substring(0,position);
secondDigit = +data.substring(+position + 1);

switch (sight) {
	case '+': 
		alert (firstDigit + secondDigit);
		break;
	case '-': 
		alert (firstDigit - secondDigit);
		break;
	case '/': 
		alert (firstDigit / secondDigit);
		break;
	case '*': 
		alert (firstDigit * secondDigit);
		break;
	default: 
		alert ('Write correct expression, please!');
}
