// Menyimpan elemen DOM agar tidak dicari berulang kali (Optimasi)
const els = {
    status: document.getElementById("status"),
    category: document.getElementById("category"),
    productList: document.getElementById("product-list"),
    statistics: document.getElementById("statistics")
};

export function renderStatus(message) {
    els.status.textContent = message;
}

export function renderCategories(products) {
    // (4) Struktur Data: Set
    const uniqueCategories = [...new Set(products.map(p => p.category))];
    els.category.innerHTML = `<option value="all">Semua Kategori</option>` + 
        uniqueCategories.map(c => `<option value="${c}">${c}</option>`).join("");
}

export function renderProducts(products) {
    if (products.length === 0) {
        els.productList.innerHTML = `<p>Produk tidak ditemukan (State: Empty).</p>`;
        return;
    }

    // (5) Method: map
    els.productList.innerHTML = products.map(p => {
        // Logika tampilan peringatan stok/rating
        let badge = "";
        if (p.stock < 10) badge = `<div class="badge-warning">Sisa Stok: ${p.stock}</div>`;
        else if (p.rating >= 4.5) badge = `<div class="badge-success">Rating Tinggi!</div>`;

        return `
        <div class="product-card">
            <img src="${p.thumbnail || 'https://via.placeholder.com/150'}" alt="${p.title}">
            <h3>${p.title}</h3>
            <p class="info">Kategori: ${p.category}</p>
            <p class="info">Rating: ⭐ ${p.rating.toFixed(1)}</p>
            <p class="price">$${p.price.toFixed(2)}</p>
            ${badge}
        </div>`;
    }).join("");
}

export function renderStatistics(stats, extraInfo = "") {
    if (!stats) {
        els.statistics.innerHTML = "Belum ada data statistik.";
        return;
    }
    
    // Menampilkan komponen wajib: total products, average price, total stock, average rating
    els.statistics.innerHTML = `
        <strong>Statistik Produk:</strong>
        <ul style="line-height: 1.6; margin-top: 10px; font-size: 14px;">
            <li>Total Produk: ${stats.totalProducts}</li>
            <li>Rata-rata Harga: $${stats.averagePrice.toFixed(2)}</li>
            <li>Total Stok Keseluruhan: ${stats.totalStock} unit</li>
            <li>Rata-rata Rating: ${stats.averageRating.toFixed(2)}</li>
        </ul>
        <p style="font-size: 12px; color: #666; margin-top: 10px;">${extraInfo}</p>
    `;
}