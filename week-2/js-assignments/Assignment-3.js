function avg(data) {
    let total = 0;
    for (var i = 0; i < data.products.length; i++) {
        total += data.products[i].price
    }
    let avg = total / data.size;
    return avg
}