let hargaBaju = 150000;
let diskon = 20;

function calculatedDiscountPrice (price, discountPercent){
    return price - (price * discountPercent)/100
}
let hargaSetelahDiskon = calculatedDiscountPrice(hargaBaju, diskon);

console.log("harga awal: Rp",hargaBaju);
console.log("diskon:",diskon + "%");
console.log("harga bayar: Rp",hargaSetelahDiskon);