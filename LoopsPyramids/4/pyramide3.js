/*
4) Создать пирамиду в виде чисел в обратном порядке. Пользователь вводит число. К примеру введено 5, первый ряд 5,
    второй ряд 5 4, третий - 5 4 3 и т.д.
*/

var data = prompt("Enter max stage from 1 to 9 to create a pyramide");

for (var i = 1; i <= data; i++) {
    for (var k = (data - i)/2; k > 0; k--) {
        document.write('-');
    }
    for (var j = 0; j < i; j++) {
        document.write(data - j);
    }
    document.write('<br>');
}