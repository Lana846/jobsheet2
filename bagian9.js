const daftarProduk = [
  { id: 1, title: "Laptop", category: "electronics" },
  { id: 2, title: "Sabun", category: "beauty" },
  { id: 3, title: "Kamera", category: "electronics" }
];

function groupByCategory(products) {
  return products.reduce((groups, product) => {

    const key = product.category;
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(product);
    return groups;
  }, {});
}

console.log(groupByCategory(daftarProduk));
