/* 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/
function numb_to_obj(num) {
    let num_obj = {
        'сотни': 0,
        'десятки': 0,
        'единицы': 0,
    }
    let length = String(num).length
    if ((!isNaN(num)) && ((0 <= Number(num)) && (Number(num) <= 999))) {
        switch (length) {
            case 1:
                num_obj['единицы'] = num
                break;
            case 2:
                num_obj['единицы'] = String(num)[1]
                num_obj['десятки'] = String(num)[0]
                break;
            case 3:
                num_obj['единицы'] = String(num)[2]
                num_obj['десятки'] = String(num)[1]
                num_obj['сотни'] = String(num)[0]
        }
    } else if (Number(num) >= 1000) {
        console.log("Введенное число больше, чем 999")
    } else if (Number(num) < 0) {
        console.log("Введенное число меньше, чем 0")
    } else if (String(num)) {
        console.log("Вы ввели строку!")
    }
    return num_obj
}

numb_to_obj(45)

/* 2. Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу. */

var basket = {
    'goods': ['Phone', 'TV', 'Notebook'],
    'price': [35000, 18200, 55400],
    'count': [2, 1, 3]
}

function countCartPrice() {
    let summ_basket = 0
    for (item in basket.price) {
        summ_basket += basket.price[item] * basket.count[item]
    }
    return summ_basket
}
countCartPrice()