    let main = document.querySelector('.main');
    let hd = document.createElement('h1');
    hd.className = 'header';
    hd.innerHTML = 'This is your basket';
    hd.style.textAlign = 'center';
    main.appendChild(hd);
    let basketWrap = document.createElement('div');
    basketWrap.className = 'basket__wrap';
    main.appendChild(basketWrap);
    var total_summ = 0
    function createProdItem(prod, price, quan) {
        let newProd;
        newProd = document.createElement('div');
        newProd.className = 'prod_wrap';
        var prod_summ = price * quan;
        newProd.innerHTML = `
     <div class="prod_header">good: ${prod}</div>
     <div class="prod_price">price: <price>${price}</price></div>
     <div class="prod_count">count: <count>${quan}</count></div>
     <button class='add_in_basket'>Добавить в корзину</button>
     <div class="prod_summ">total: <total>${prod_summ}</total></div>`;
        total_summ += prod_summ
        basketWrap.appendChild(newProd);
    }
    
    /* Создание товаров на странице
    createProdItem("phone", 15000, 0);
    createProdItem("notebook", 52000, 0);
    createProdItem("PC", 100000, 0);*/

    // Корзина
    var basket = {
        'items' : [],
        add (id) {
            var catalogItem = catalog.find(function (item) {item.id === id})
            this.items.push(catalogItem)
        }
    }
    var catalog = [
        {id: 1, name: 'Футболка', price: '600'},
        {id: 2, name: 'Штаны', price: '1200'},
    ]
catalog.forEach(function(item) {
    console.log(item)
    addEventListener('click', createProdItem(item.name,item.price,0))

    // напишем обработчик на кнопку Добавить в корзину
    var add_as_array = Array.from(document.getElementsByClassName('add_in_basket'))
    add_as_array.forEach(function() { 
        addEventListener('click', add_in_basket_func)
        // обработчик для суммы по товару
        addEventListener('click', total_of_good_func)
        //обработчик для подсчёта суммы товаров в корзине
        addEventListener('click', total_in_basket_func)
    });
})
    function add_in_basket_func (eventObj) {
        eventObj.path[1].getElementsByTagName('count')[0].innerHTML ++
        console.log('Товар добавлен в корзину')
    }
    function total_of_good_func(eventObj) {
        let count = eventObj.path[1].getElementsByTagName('count')[0].innerHTML
        let price = eventObj.path[1].getElementsByTagName('price')[0].innerHTML
        eventObj.path[1].getElementsByTagName('total')[0].innerHTML = count * price
    }
    //функция для подсчёта суммы товаров в корзине
    function total_in_basket_func() { 
        var count_in_basket = '';
        var count_in_basket_arr = Array.from(document.getElementsByTagName('count'))
        count_in_basket_arr.forEach(function(elem) {
            count_in_basket = Number(count_in_basket) + Number(elem.innerHTML)
        })
        let temp = Array.from(document.getElementsByTagName('total'))
        let temp2 = ''
        temp.forEach(function(el) {
            temp2 = Number(temp2) + Number(el.innerHTML)
            total_summ = Number(temp2)
        })
        basket_status = "В корзине " + count_in_basket + " товара(ов) на сумму:"
        basketInfo.innerHTML =
        `<div class="basket__info">${basket_status}</div>
        <div id="total_summ" class="sum__price">${total_summ}</div>`;
        }    
    
    let basketInfo = document.createElement('div');
    basketInfo.className = 'basket_info';
    var basket_status;
    basket_status = "Корзина пуста"
    basketInfo.innerHTML =
    `<div class="basket__info">${basket_status}</div>`
    main.appendChild(basketInfo);