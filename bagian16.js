const dataBesar = Array.from({ length: 10000 }, (_, index) => index + 1);
const targetCari = 10000;

function linearSearchWithCount(array, target) {
  let langkah = 0;
  for (let i = 0; i < array.length; i++) {
    langkah++;
    if (array[i] === target) {
      return { posisi: i, langkah: langkah };
    }
  }
  return { posisi: -1, langkah: langkah };
}

function binarySearchWithCount(array, target) {
  let langkah = 0;
  let kiri = 0;
  let kanan = array.length - 1;

  while (kiri <= kanan) {
    langkah++;
    let tengah = Math.floor((kiri + kanan) / 2);

    if (array[tengah] === target) {
      return { posisi: tengah, langkah: langkah };
    } else if (array[tengah] < target) {
      kiri = tengah + 1;
    } else {
      kanan = tengah - 1;
    }
  }
  return { posisi: -1, langkah: langkah };
}

const hasilLinear = linearSearchWithCount(dataBesar, targetCari);
const hasilBinary = binarySearchWithCount(dataBesar, targetCari);

console.log(`Linear Search -> Menemukan dalam ${hasilLinear.langkah} langkah.`);
console.log(`Binary Search -> Menemukan dalam ${hasilBinary.langkah} langkah.`);
