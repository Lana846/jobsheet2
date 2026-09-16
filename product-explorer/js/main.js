import { state } from "./state.js";
import { fetchProducts } from "./api.js";
import { smartSearch, sortProducts, getProductStatistics } from "./algorithms.js";
import { renderProducts, renderCategories, renderStatistics, renderStatus } from "./ui.js";

// (6) Struktur Data: Map (Kamus data global untuk pencarian ID instan)
const productLookupMap = new Map();

function render() {
    let result = [...state.products];
    
    result = smartSearch(result, state.search);
    
    if (state.category !== "all") {
        result = result.filter(p => p.category === state.category);
    }
    
    result = sortProducts(result, state.sortBy);

    // Update State
    state.status = result.length === 0 ? "empty" : "success";

    // (7) Method: some, every, find (Menghasilkan string info tambahan untuk Statistik)
    let extraInfo = "";
    if (result.length > 0) {
        const isLowStock = result.some(p => p.stock < 10);
        const isAllGood = result.every(p => p.rating >= 4.0);
        const cheapestProduct = result.find(p => p.price < 20); // Mencari produk murah pertama
        
        if (isLowStock) extraInfo += "⚠️ Ada produk dengan stok menipis. ";
        if (isAllGood) extraInfo += "⭐ Kualitas terjamin (semua rating >= 4.0). ";
        if (cheapestProduct) extraInfo += `💡 Produk termurah saat ini: ${cheapestProduct.title}.`;
    }

    renderProducts(result);
    renderStatistics(getProductStatistics(result), extraInfo);
}

async function init() {
    try {
        state.status = "loading";
        renderStatus("Memuat produk dari server...");
        
        const data = await fetchProducts();
        state.products = data;
        state.status = "success";
        
        // Memasukkan data ke dalam Map
        data.forEach(p => productLookupMap.set(p.id, p));

        renderCategories(data);
        render();
        renderStatus(""); 
    } catch (error) {
        state.status = "error";
        renderStatus("Gagal memuat produk. Silakan periksa koneksi internet.");
        console.error(error);
    }
}

// Event Listeners
document.getElementById("search").addEventListener("input", e => { 
    state.search = e.target.value; 
    render(); 
});
document.getElementById("category").addEventListener("change", e => { 
    state.category = e.target.value; 
    render(); 
});
document.getElementById("sort").addEventListener("change", e => { 
    state.sortBy = e.target.value; 
    render(); 
});

init();