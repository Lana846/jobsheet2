export function formatPrice(price) {

    return new Intl.NumberFormat("id-ID", {

        style: "currency",

        currency: "IDR",

        minimumFractionDigits: 0

    }).format(price);

}


export function capitalize(text) {

    return text.charAt(0).toUpperCase()
        + text.slice(1);

}