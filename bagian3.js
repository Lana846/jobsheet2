const products = [
{
id: 1,
title: "Laptop",
price: 1200,
rating: 4.5,
stock: 10,
category: "laptops",
tags: ["computer", "electronics", "office"],
dimensions: { width: 30, height: 2, depth: 20 },
reviews: [
{ user: "A", rating: 5, comment: "Good product" },
{ user: "B", rating: 4, comment: "Worth it" }
]
},
{
id: 2,
title: "Smartphone",
price: 800,
rating: 4.2,
stock: 15,
category: "phones",
tags: ["mobile", "electronics"],
dimensions: { width: 7, height: 0.8, depth: 15 },
reviews: [
{ user: "C", rating: 4, comment: "Nice camera" },
{ user: "D", rating: 5, comment: "Fast" },
{ user: "E", rating: 3, comment: "Battery so-so" }
]
}
];

const allTags = products.map(products => products.tags);
console.log(allTags);

function  findProductByTag( products, tag) {
    return products.filter(p => p.tags.includes(tag));
}
let produkElektronik = findProductByTag(products, "Electronics");
console.log(produkElektronik);

const hitungReview = products.map(product => {
    return{
        id: product.id, title:product.title, totalReview:product.reviews.length
    };
});
console.log(hitungReview);

const reviewBagus = products.flatMap(products => {
    return products.reviews.filter(review => review.rating === 5);
});
console.log(reviewBagus)

const rataRataManual = products.map(product => {
    let totalBintang = 0;
    for (let review of product.reviews){
        totalBintang += review.rating;
    }

    let rataRata = totalBintang / product.reviews.length;
    return{ title:product.title, averageManual: rataRata}; 
});
console.log(rataRataManual);

const produkTerpopuler = products.reduce((produkSebelumnya, produkSaatIni) => {
 if(produkSaatIni.reviews.length > produkSebelumnya.reviews.length){
    return produkSaatIni;
 } else {
    return produkSebelumnya;
  }   
});
console.log(produkTerpopuler);

const semuaRatingDatar = products.flatMap(product => {
    return product.reviews.map(review => review.raitng);
});
console.log(semuaRatingDatar)



