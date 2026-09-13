class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Antrean kosong";
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const antreanKasir = new Queue();
antreanKasir.enqueue("Pelanggan A");
antreanKasir.enqueue("Pelanggan B");
antreanKasir.enqueue("Pelanggan C");

console.log(antreanKasir.peek());   
console.log(antreanKasir.dequeue()); 
console.log(antreanKasir.peek());   