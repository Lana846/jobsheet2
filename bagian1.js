function calculatedDiscountPrice (price, discountPercent){
    return price - (price * discountPercent)/100
}

const cart = [
    {title: "Laptop", price: 1000,discountPercent: 10},
    {title: "Mouse", price: 20,discountPercent: 5},
    {title: "Keyboard", price: 50,discountPercent: 0},
]

for (let item of cart){
    let hargaAkhir =calculatedDiscountPrice(item.price, item.discountPercent);
    console.log("produk: " + item.title);
    console.log("harga setelah diskon: " + hargaAkhir);
    
}