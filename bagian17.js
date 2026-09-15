const dummyProducts = [
    { thumbnail: "https://via.placeholder.com/150", title: "Laptop Pro", category: "Elektronik", price: 1200, rating: 4.8 },
    { thumbnail: "https://via.placeholder.com/150", title: "Sepatu Lari", category: "Olahraga", price: 85, rating: 4.5 },
    { thumbnail: "https://via.placeholder.com/150", title: "Buku Pemrograman", category: "Edukasi", price: 30, rating: 4.9 },
    { thumbnail: "https://via.placeholder.com/150", title: "Kemeja Kerja", category: "Pakaian", price: 45, rating: 4.2 },
    { thumbnail: "https://via.placeholder.com/150", title: "Jam Pintar", category: "Aksesoris", price: 150, rating: 4.6 }
];

function renderProducts(products) {
    const container = document.querySelector("#product-list");
    container.innerHTML = "";

    for (const product of products) {
        const card = document.createElement("div");
        card.classList.add("product-card");
        
        card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.category}</p>
            <p>Harga: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
        `;
        container.append(card);
    }
}

renderProducts(dummyProducts);