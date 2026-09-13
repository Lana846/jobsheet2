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

const produk1000 = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  category: `kategori-${i % 10}` 
}));

function cariPasanganNestedLoop(products) {
  let operasi = 0;
  for (let i = 0; i < products.length; i++) {
    for (let j = i + 1; j < products.length; j++) {
      operasi++;
      if (products[i].category === products[j].category) {
      }
    }
  }
  return operasi;
}

function cariPasanganMap(products) {
  let operasi = 0;
  const mapKategori = new Map();
  
  for (const p of products) {
    operasi++;
    if (!mapKategori.has(p.category)) {
      mapKategori.set(p.category, 0);
    }
    mapKategori.set(p.category, mapKategori.get(p.category) + 1);
  }
  return operasi;
}

console.log("Operasi Nested Loop:", cariPasanganNestedLoop(produk1000));
console.log("Operasi Grouping Map:", cariPasanganMap(produk1000)); 