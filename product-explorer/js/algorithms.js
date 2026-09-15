export function linearSearch(products, keyword) {

    if (keyword === "") {
        return products;
    }

    return products.filter(product => {

        return product.title
            .toLowerCase()
            .includes(keyword.toLowerCase());

    });

}


export function binarySearch(products, keyword) {

    const sortedProducts = [...products].sort((a, b) => {

        return a.title.localeCompare(b.title);

    });


    let left = 0;
    let right = sortedProducts.length - 1;


    while (left <= right) {

        const middle = Math.floor(
            (left + right) / 2
        );


        const name =
            sortedProducts[middle].title.toLowerCase();


        if (name.includes(keyword.toLowerCase())) {

            return [sortedProducts[middle]];

        }


        if (name < keyword.toLowerCase()) {

            left = middle + 1;

        } else {

            right = middle - 1;

        }

    }


    return [];

}


export function groupByCategory(products) {

    const categories = {};


    products.forEach(product => {

        if (!categories[product.category]) {

            categories[product.category] = [];

        }


        categories[product.category].push(product);

    });


    return categories;

}


export function sortProducts(products, sortBy) {

    const result = [...products];


    if (sortBy === "price-asc") {

        return result.sort((a, b) => {

            return a.price - b.price;

        });

    }


    if (sortBy === "price-desc") {

        return result.sort((a, b) => {

            return b.price - a.price;

        });

    }


    if (sortBy === "name-asc") {

        return result.sort((a, b) => {

            return a.title.localeCompare(b.title);

        });

    }


    if (sortBy === "name-desc") {

        return result.sort((a, b) => {

            return b.title.localeCompare(a.title);

        });

    }


    return result;

}