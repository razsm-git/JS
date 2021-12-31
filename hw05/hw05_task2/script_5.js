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
     <div class="prod_price">price: ${price}</div>
     <div class="prod_count">count: ${quan}</div>
     <div class="prod_summ">${prod_summ}</div>`;
        total_summ += prod_summ
        basketWrap.appendChild(newProd);
    }
    createProdItem("phone", 15000, 1);
    createProdItem("notebook", 52000, 5);
    createProdItem("PC", 100000, 0);
   
    let basketInfo = document.createElement('div');
    basketInfo.className = 'basket_info';
    var basket_status;
    var count_in_basket = document.getElementsByClassName("prod_wrap").length
    if (total_summ === 0) {
        basket_status = "Корзина пуста"
        basketInfo.innerHTML =
        `<div class="basket__info">${basket_status}</div>`
    } else {
        basket_status = "В корзине " + count_in_basket + " товара(ов) на сумму:"
        basketInfo.innerHTML =
        `<div class="basket__info">${basket_status}</div>
    <div id="total_summ" class="sum__price">${total_summ}</div>`;
    }
    main.appendChild(basketInfo);