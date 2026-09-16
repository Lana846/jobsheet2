const state = {
    products: [],
    status: "idle"
};

function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{ title: "Laptop Pro", price: 1200 }]);
        }, 1500);
    });
}

function render() {
    console.log(`[Render UI] Status: ${state.status} | Data:`, state.products);
}

async function loadProducts() {
    try {
        const products = await getProducts(); 
        state.products = products;
        state.status = "success";
    } catch (error) {
        state.status = "error";
        console.error(error);
    } finally {
        render(); 
    }
}

loadProducts();