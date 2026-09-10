const products = [
    {id:1, title: "laptop", price: 1200, category: "laptops", stock: 5},
    {id:2, title: "Smartphone", price: 800, category: "phones", stock: 15},
    {id:3, title: "Headphone", price: 100, category: "audio", stock: 3},
]

function findProductById (product, id){
    return products.find(product => product.id === id)
}

let hasilPencarian = findProductById (products, 3)
console.log(hasilPencarian);

const lowStockProducts = products.filter(product => product.stock < 10)
console.log("produk dengan stock sedikit: ",lowStockProducts)