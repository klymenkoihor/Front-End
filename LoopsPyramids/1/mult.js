/*
1) Создать таблицу умножения от числа которое введет пользователь.
*/

var data = prompt("Enter some digit form 1 to 10 to create multiplication table");

for(var i = data; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + i*j);
        document.write(i + " x " + j + " = " + i*j);
        document.write('<br>');
    }
    console.log('');
    document.write('<br>');
}