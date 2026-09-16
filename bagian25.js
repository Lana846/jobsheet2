async function fetchProducts() {
    const response = await fetch(
        "https://dummyjson.com/products?limit=30"
    );

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    return data.products;
}

function getStatistics(products) {
    const prices = products.map(p => p.price);
    const stocks = products.map(p => p.stock);
    const ratings = products.map(p => p.rating);

    return {
        totalProducts: products.length,

        averagePrice:
            prices.reduce((sum, price) => sum + price, 0)
            / products.length,

        highestPrice:
            Math.max(...prices),

        lowestPrice:
            Math.min(...prices),

        totalStock:
            stocks.reduce((sum, stock) => sum + stock, 0),

        averageRating:
            ratings.reduce((sum, rating) => sum + rating, 0)
            / products.length
    };
}

function getCategoryAnalytics(products) {

    const groups = products.reduce((result, product) => {

        if (!result[product.category]) {
            result[product.category] = [];
        }

        result[product.category].push(product);

        return result;

    }, {});

    return Object.entries(groups).map(
        ([category, products]) => ({

            category,

            totalProducts:
                products.length,

            averagePrice:
                products.reduce(
                    (sum, p) => sum + p.price,
                    0
                ) / products.length,

            averageRating:
                products.reduce(
                    (sum, p) => sum + p.rating,
                    0
                ) / products.length,

            totalStock:
                products.reduce(
                    (sum, p) => sum + p.stock,
                    0
                )
        })
    );
}
