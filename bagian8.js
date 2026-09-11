const dataAngka = [5, 3, 8, 1, 4]

function bubbleShort(numbers) {
    const arr = [...numbers];
        for (let i = 0; i < arr.length -1; i ++){
            for(let j = 0; j < arr.length - 1 - i;j ++){
                if (arr[j] > arr[j + 1]){
                    [arr[j], arr [j + 1]] = [arr [j + 1],arr [j]];
                }
            }
    }
    return arr
}
console.log(bubbleShort(dataAngka))