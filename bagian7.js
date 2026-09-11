const dataTerurut = [10, 24, 35, 42, 55, 68, 71, 89];

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
console.log("Posisi angka 55:", binarySearch(dataTerurut, 55));


const daftarProduk = [
  { id: 1, title: "baju", price: 150000 },
  { id: 2, title: "celana", price: 450000 },
  { id: 2, title: "topi", price: 300000 },
];
const sortedProducts = [...daftarProduk].sort((a, b) => a.price - b.price);

function binarySearchByPrice(sortedArray, targetPrice) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const currentPrice = sortedArray[mid].price;

    if (currentPrice === targetPrice) {
      return sortedArray[mid];
    }
    if (currentPrice < targetPrice) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return null;
}
const detailProduk = binarySearchByPrice(sortedProducts, 150000);
console.log(detailProduk);

