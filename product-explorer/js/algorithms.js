export function getProductStatistics(products) {
    if (!products.length) return null;
    
    // (1) Method: reduce
    const totals = products.reduce((acc, p) => {
        acc.sumPrice += p.price;
        acc.sumStock += p.stock;
        acc.sumRating += p.rating;
        return acc;
    }, { sumPrice: 0, sumStock: 0, sumRating: 0 });

    const totalProducts = products.length;

    return {
        totalProducts,
        averagePrice: totals.sumPrice / totalProducts,
        totalStock: totals.sumStock,
        averageRating: totals.sumRating / totalProducts,
    };
}

export function smartSearch(products, keyword) {
    if (!keyword) return products;
    const lower = keyword.toLowerCase();
    // (2) Method: filter
    return products.filter(p => p.title.toLowerCase().includes(lower));
}

export function sortProducts(products, sortBy) {
    const result = [...products];
    // (3) Method: sort
    return result.sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating-desc") return b.rating - a.rating;
        if (sortBy === "title-asc") return a.title.localeCompare(b.title);
        return 0;
    });
}