export function getCartTotalValue(arrCart){
    let total = 0;
    for (let e of arrCart) {
        total += e.product.price * e.quantity;
    }
    return total;
}
