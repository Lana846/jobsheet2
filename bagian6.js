const dataAngka = [10,24,54,70,100]
function linearSearch(array, target){
    for (let i = 0; i < array.length; i++){
        if (array[i] === target){
            return i;
        }
    }
    return "gagal";
}
console.log(linearSearch(dataAngka, 0));

const produk = [
    {id:1, title:"laptop"},
    {id:2, title:"smartphone"}
];
function linearSearch(produk, targetId){
    for(let i = 0; i < produk.length; i++){
        if (produk[i].id === targetId){
            return i;
        }
    }
    return "gagal";
}
console.log(linearSearch(produk, 3));