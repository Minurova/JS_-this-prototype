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