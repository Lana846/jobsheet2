import { products } from "./data.js";


export async function fetchProducts() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(products);

        }, 500);

    });

}