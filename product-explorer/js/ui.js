import { formatPrice } from "./utils.js";


export function renderProducts(products) {

    const productList =
        document.getElementById("product-list");


    productList.innerHTML = "";


    if (products.length === 0) {

        productList.innerHTML = `
            <p>Produk tidak ditemukan.</p>
        `;

        return;

    }


    products.forEach(product => {

        const card =
            document.createElement("div");


        card.className = "product-card";


        card.innerHTML = `

            <h3>
                ${product.title}
            </h3>

            <div class="category">
                Kategori: ${product.category}
            </div>

            <div class="price">
                ${formatPrice(product.price)}
            </div>

            <div class="description">
                ${product.description}
            </div>

        `;


        productList.appendChild(card);

    });

}


export function renderCategories(products) {

    const categorySelect =
        document.getElementById("category");


    const categories = [
        ...new Set(
            products.map(product => product.category)
        )
    ];


    categorySelect.innerHTML = `

        <option value="all">
            Semua Kategori
        </option>

    `;


    categories.forEach(category => {

        const option =
            document.createElement("option");


        option.value = category;

        option.textContent = category;


        categorySelect.appendChild(option);

    });

}


export function renderStatistics(products) {

    const statistics =
        document.getElementById("statistics");


    const totalProducts =
        products.length;


    const totalPrice =
        products.reduce((total, product) => {

            return total + product.price;

        }, 0);


    const averagePrice =
        totalProducts > 0
            ? totalPrice / totalProducts
            : 0;


    statistics.innerHTML = `

        <strong>Statistik Produk</strong>

        <br><br>

        Jumlah Produk:
        ${totalProducts}

        <br>

        Rata-rata Harga:
        ${formatPrice(averagePrice)}

    `;

}


export function renderStatus(message) {

    const status =
        document.getElementById("status");


    status.textContent = message;

}