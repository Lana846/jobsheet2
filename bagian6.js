const dataAngka = [10,24,54,70,100]
function linearSearch(array, target){
    for (let i = 0; i < array.length; i++){
        if (array[i] === target){
            return i;
        }
    }
    return -1;
}
console.log(linearSearch(dataAngka, 70));
