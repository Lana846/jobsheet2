class Stack {
  constructor() {
    this.items = [];
  }
  push(item) { this.items.push(item); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
  isEmpty() { return this.items.length === 0; }
}

const tumpukanBaru = new Stack();
tumpukanBaru.push("Buku A");
tumpukanBaru.push("Buku B");
console.log(tumpukanBaru.pop());

class ProductExplorer {
  constructor() {
    this.history = new Stack();
    this.currentSearch = "";
  }

  search(keyword) {
    if (this.currentSearch) {
     
      this.history.push(this.currentSearch);
    }
    this.currentSearch = keyword;
    console.log(`Menampilkan hasil pencarian untuk: "${this.currentSearch}"`);
  }

  undo() {
    if (this.history.isEmpty()) {
      console.log("Tidak ada riwayat pencarian untuk di-undo.");
      return;
    }

    this.currentSearch = this.history.pop();
    console.log(`Undo berhasil. Kembali ke pencarian: "${this.currentSearch}"`);
  }
}

// Uji coba eksekusi sistem:
const explorer = new ProductExplorer();
explorer.search("laptop"); 
explorer.search("phone");  
explorer.search("tablet"); 
explorer.undo(); 
explorer.undo(); 