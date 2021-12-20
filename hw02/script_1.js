/*1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - используется префиксная форма записи, a увеличивается на 1 и затем вывод
d = b++; alert(d);           // 1 - используется постфиксная форма записи, b выводит значение, а затем увеличивается на 1
c = (2+ ++a); alert(c);      // 5 - a теперь имеет значение 2, первым выполняется инкремент, то есть a становится 3, после сложение
d = (2+ b++); alert(d);      // 4 - b теперь имеет значение 2, первым выполняется постфиксный инкремент, то есть b выводится 2, после сложение
alert(a);                    // 3 - после примера в 5 строке, a стал 3 (префиксный инкремент)
alert(b);                    // 3 - после примера в 6 строке, b стал 3 (постфиксный инкремент)*/


/* 2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2) //5; - a умножается само на себя, и прибавляется 1 */

/* 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. */
var a = 5;
var b = 4;
if (a >= 0 && b >= 0) {
    console.log(a - b)
} else if (a < 0 && b < 0) {
    console.log(a * b)
} else {
    console.log(a + b)
}
/* 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. */
var a = 10
switch (a) {
    case 0:
        console.log(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 1:
        console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 2:
        console.log(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 3:
        console.log(3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 4:
        console.log(4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 5:
        console.log(5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 6:
        console.log(6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 7:
        console.log(7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 8:
        console.log(8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 9:
        console.log(9, 10, 11, 12, 13, 14, 15)
        break;
    case 10:
        console.log(10, 11, 12, 13, 14, 15)
        break;
    case 11:
        console.log(11, 12, 13, 14, 15)
        break;
    case 12:
        console.log(12, 13, 14, 15)
        break;
    case 13:
        console.log(13, 14, 15)
        break;
    case 14:
        console.log(14, 15)
        break;
    case 15:
        console.log(15)
        break;
}

/*5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.*/
function my_func(x, y, operation) {
    var result;
    if (operation === '*') {
        result = x * y
    } else if (operation === '/') {
        result = x / y
    } else if (operation === '+') {
        result = x + y
    } else if (operation === '-') {
        result = x - y
    }
    return result
}

console.log(my_func(2, 3, '+'))

console.log(my_func(2, 10, '*'))

console.log(my_func(80, 10, '/'))

console.log(my_func(80, 15, '-'))

/* 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch). */
// не понял, что значит реализовать из пункта 3, поэтому выполнил так

function my_func2(x, y, operation) {
    var result;
    switch (operation) {
        case '-':
            result = x - y
            break
        case '+':
            result = x + y
            break
        case '*':
            result = x * y
            break
        case '/':
            result = x / y
            break
    }
    return result
}