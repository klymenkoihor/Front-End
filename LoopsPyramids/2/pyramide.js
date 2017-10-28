/*
2) Создать пирамиду в виде чисел. Чтобы в каждом ряду число совпадало с кол-вом чисел в ряду (1-1, 2-22, 3-333 и т.д.).
Пользователь вводит число - это будет максимальное число для построения пирамиды.
*/

var data = prompt("Enter max stage from 1 to 9 to create a pyramide");

for (var i = 1; i <= data; i++) {
    for (var k = (data - i)/2; k > 0; k--) {
        document.write('-');
    }
    for (var j = 1; j <= i; j++) {
        document.write(i);
    }
    document.write('<br>');
}