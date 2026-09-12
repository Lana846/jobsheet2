const products = [
  { category: "laptops", brand: "Asus", tags: ["computer", "office"] },
  { category: "phones", brand: "Samsung", tags: ["mobile", "electronics"] },
  { category: "laptops", brand: "Asus", tags: ["computer", "gaming"] }
];

const uniqueCategories = [...new Set(products.map(p => p.category))];
console.log("Kategori:", uniqueCategories);

const uniqueBrands = [...new Set(products.map(p => p.brand))];
console.log("Brand:", uniqueBrands);

const uniqueTags = [...new Set(products.flatMap(p => p.tags))];
console.log("Tags:", uniqueTags);