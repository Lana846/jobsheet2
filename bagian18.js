let state = {
    products: [
        { id: 1, title: "Kopi Hitam", category: "Minuman", price: 15000 },
        { id: 2, title: "Roti Bakar", category: "Makanan", price: 20000 },
        { id: 3, title: "Teh Manis", category: "Minuman", price: 10000 },
        { id: 4, title: "Mie Goreng", category: "Makanan", price: 25000 }
    ],
    search: "",
    category: "all",
    sortBy: "default",
    status: "idle" 
};

function updateState(newState) {
    state = { ...state, ...newState };
    render();
}

function render() {
    let hasil = state.products.filter(item => {
        const matchSearch = item.title.toLowerCase().includes(state.search.toLowerCase());
        const matchCategory = state.category === "all" || item.category === state.category;
        return matchSearch && matchCategory;
    });

    if (state.sortBy === "termurah") {
        hasil.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === "termahal") {
        hasil.sort((a, b) => b.price - a.price);
    }

    mockUIUpdater(hasil);
}

function mockUIUpdater(data) {
    console.log(`[Pencarian: '${state.search}' | Kategori: '${state.category}']`);
    console.table(data);
}

console.log("=== Render Pertama ===");
render();

console.log("\n=== Simulasi User Mengubah Filter ===");
updateState({ 
    category: "Makanan", 
    sortBy: "termahal" 
});