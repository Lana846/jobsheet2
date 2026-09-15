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

const getStatistics = (products = []) => {
    const totalProducts = products?.length ?? 0;

    return {
        totalProducts,
        averagePrice: products.reduce((sum, { price = 0 } = {}) => sum + price, 0) / totalProducts,
        highestPrice: Math.max(...products.map(p => p?.price ?? 0)),
        lowestPrice: Math.min(...products.map(p => p?.price ?? 0)),
        totalStock: products.reduce((sum, { stock = 0 } = {}) => sum + stock, 0),
        averageRating: products.reduce((sum, { rating = 0 } = {}) => sum + rating, 0) / totalProducts
    };
};

console.log(getStatistics(products));