const inventoriKulkas = [
  { id: 101, title: "Susu Segar", category: "Dairy" },
  { id: 102, title: "Telur Ayam", category: "Protein" },
  { id: 103, title: "Bayam", category: "Vegetable" }
];

function buildProductLookup(products) {
  const productMap = new Map();
  for (const product of products) {
    productMap.set(product.id, product);
  }
  return productMap;
}

const lookupTabel = buildProductLookup(inventoriKulkas);
console.log(lookupTabel.get(102)); 
