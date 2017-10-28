/*
3) Создать пирамиду в виде чисел (1-1, 2-12, 3-123 и т.д.). Пользователь вводит число.
*/

var data = prompt("Enter max stage from 1 to 9 to create a pyramide");

for (var i = 1; i <= data; i++) {
    for (var k = (data - i)/2; k > 0; k--) {
        document.write('-');
    }
    for (var j = 1; j <= i; j++) {
        document.write(j);
    }
    document.write('<br>');
}