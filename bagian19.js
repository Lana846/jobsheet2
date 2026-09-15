// 1. Inisialisasi State
const state = {
    products: [
        { title: "Kopi Hitam", category: "Minuman", price: 15000 },
        { title: "Roti Bakar", category: "Makanan", price: 20000 },
        { title: "Teh Manis", category: "Minuman", price: 10000 },
        { title: "Mie Goreng", category: "Makanan", price: 25000 }
    ],
    search: "",
    category: "all",
    sortBy: "default"
};

function render() {
    let hasil = [...state.products];

    if (state.search.trim() !== "") {
        hasil = hasil.filter(item => item.title.toLowerCase().includes(state.search.toLowerCase()));
    }

    if (state.category !== "all") {
        hasil = hasil.filter(item => item.category === state.category);
    }

    if (state.sortBy === "termurah") {
        hasil.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === "termahal") {
        hasil.sort((a, b) => b.price - a.price);
    }

    const container = document.querySelector("#product-list");
    container.innerHTML = ""; 

    for (const product of hasil) {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <h3>${product.title}</h3>
            <p>Kategori: ${product.category}</p>
            <p>Harga: Rp${product.price}</p>
        `;
        container.append(card);
    }
}

document.querySelector("#search-input").addEventListener("input", (e) => {
    state.search = e.target.value;
    render();
});

document.querySelector("#category-select").addEventListener("change", (e) => {
    state.category = e.target.value;
    render();
});

document.querySelector("#sort-select").addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    render();
});

render();