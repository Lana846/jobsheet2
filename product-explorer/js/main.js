import { state } from "./state.js";

import { fetchProducts } from "./api.js";

import {
    linearSearch,
    sortProducts
} from "./algorithms.js";

import {
    renderProducts,
    renderCategories,
    renderStatistics,
    renderStatus
} from "./ui.js";



function render() {

    let result = [...state.products];


    // SEARCH

    result = linearSearch(
        result,
        state.search
    );


    // FILTER KATEGORI

    if (state.category !== "all") {

        result = result.filter(product => {

            return product.category === state.category;

        });

    }


    // SORTING

    result = sortProducts(
        result,
        state.sortBy
    );


    // TAMPILKAN DATA

    renderProducts(result);

    renderStatistics(result);

}



async function loadProducts() {

    try {

        state.status = "loading";


        renderStatus(
            "Memuat produk..."
        );


        const products =
            await fetchProducts();


        state.products = products;


        state.status = "success";


        renderCategories(products);


        render();


        renderStatus(
            `Berhasil memuat ${products.length} produk.`
        );


    } catch (error) {

        state.status = "error";


        renderStatus(
            "Gagal memuat produk."
        );


        console.error(error);

    }

}



// SEARCH

const searchInput =
    document.getElementById("search");


searchInput.addEventListener(
    "input",
    function(event) {

        state.search =
            event.target.value;


        render();

    }
);



// CATEGORY

const categorySelect =
    document.getElementById("category");


categorySelect.addEventListener(
    "change",
    function(event) {

        state.category =
            event.target.value;


        render();

    }
);



// SORT

const sortSelect =
    document.getElementById("sort");


sortSelect.addEventListener(
    "change",
    function(event) {

        state.sortBy =
            event.target.value;


        render();

    }
);

loadProducts();