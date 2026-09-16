export async function fetchProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products?limit=30");
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const data = await response.json();

        return data.products.map(p => ({
            ...p,
            price: p.price || 0,
            stock: p.stock || 0,
            rating: p.rating || 0
        }));
    } catch (error) {
        throw error;
    }
}