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

function exactSearch(products, keyword) {

    return products.filter(
        p => p.title === keyword
    );

}

function partialSearch(products, keyword) {

    const lowerKeyword =
        keyword.toLowerCase();

    return products.filter(
        p =>
            p.title
                .toLowerCase()
                .includes(lowerKeyword)
    );

}

function caseInsensitiveSearch(
    products,
    keyword
) {

    const lowerKeyword =
        keyword.toLowerCase();

    return products.filter(
        p =>
            p.title
                .toLowerCase()
                .includes(lowerKeyword)
    );

}

function displayProducts(products) {

    console.table(
        products.map(p => ({

            id: p.id,

            title: p.title,

            price: p.price,

            category: p.category,

            rating: p.rating,

            stock: p.stock

        }))
    );

}

async function main() {

    try {

        const products =
            await fetchProducts();

        console.log(
            `Total data: ${products.length}`
        );

        console.log(
            "\n===== STATISTICS ====="
        );

        const statistics =
            getStatistics(products);

        console.log(
            "Total Products:",
            statistics.totalProducts
        );

        console.log(
            "Average Price:",
            statistics.averagePrice.toFixed(2)
        );

        console.log(
            "Highest Price:",
            statistics.highestPrice
        );

        console.log(
            "Lowest Price:",
            statistics.lowestPrice
        );

        console.log(
            "Total Stock:",
            statistics.totalStock
        );

        console.log(
            "Average Rating:",
            statistics.averageRating.toFixed(2)
        );

        console.log(
            "\n===== CATEGORY ANALYTICS ====="
        );

        const categoryAnalytics =
            getCategoryAnalytics(products);

        console.table(
            categoryAnalytics
        );

        const exactKeyword =
            products[0].title;

        console.log(
            "\n===== EXACT SEARCH ====="
        );

        console.log(
            `Keyword: "${exactKeyword}"`
        );

        displayProducts(
            exactSearch(
                products,
                exactKeyword
            )
        );

        const partialKeyword =
            exactKeyword.split(" ")[0];

        console.log(
            "\n===== PARTIAL SEARCH ====="
        );

        console.log(
            `Keyword: "${partialKeyword}"`
        );

        displayProducts(
            partialSearch(
                products,
                partialKeyword
            )
        );

        const caseInsensitiveKeyword =
            exactKeyword.toUpperCase();

        console.log(
            "\n===== CASE-INSENSITIVE SEARCH ====="
        );

        console.log(
            `Keyword: "${caseInsensitiveKeyword}"`
        );

        displayProducts(
            caseInsensitiveSearch(
                products,
                caseInsensitiveKeyword
            )
        );

    } catch (error) {

        console.error(
            "Program gagal:",
            error.message
        );
    }
}

main();