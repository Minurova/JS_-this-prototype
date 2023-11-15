function task1() {
    function createLinkProduct(category) {
        return function (articul) {
            return `http://myshop.ru/${category}/${articul}`;
        }
    }
    let createPCLink=createLinkProduct('pc');
    let createNotebooksLink=createLinkProduct('notebooks');
    let createMonitorLink=createLinkProduct('monitors');
console.log(createPCLink(1001));
console.log(createNotebooksLink(4004));
console.log(createMonitorLink(345));
}
function task2() {
    let orders=[
        {
        fio:"Ivan",
        tovar:"phone",
        price:10000,
        quantity:2
        },
        {
        fio:"Peter",
        tovar:"usb",
        price:2300,
        quantity:5
        },
        {
        fio:"Mary",
        tovar:"connector",
        price:100,
        quantity:100
        },
        ];
        function showOrder() {
            let str=`Заказ покупателя ${this.fio} составил ${this.price*this.quantity}`;
            console.log(str);
        }
        orders.forEach(elem=>showOrder.call(elem));
}