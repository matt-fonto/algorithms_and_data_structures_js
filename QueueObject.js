// enqueue -> add back
// dequeue -> remove front
// size, clear, isEmpty, toString

// ['mary' -> 2, 'susan' -> 1, 'john' -> 0]

class Queue {
  constructor() {
    this.items = {};
    this.count = 0; // current iteration
    this.lowestCount = 0; // items called
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  front() {
    return this.isEmpty() ? undefined : this.items[this.lowestCount];
  }

  dequeue() {
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  toString() {
    if (this.isEmpty()) {
      return ""; // return empty string for consistent output
    }

    let string = "";

    for (let i = this.lowestCount; i < this.count; i++) {
      string += this.items[i];

      if (i < this.count - 1) {
        string += ", ";
      }
    }

    return string;
  }
}

const queue = new Queue();

queue.enqueue("hamlet");
queue.enqueue("gabi");
queue.enqueue("mateus");

console.log("all items: ", queue.toString());
console.log("front: ", queue.front());
console.log("size: ", queue.size());

console.log("Item removed", queue.dequeue());

console.log("all items: ", queue.toString());
console.log("front: ", queue.front());
console.log("size: ", queue.size());

console.log("Item removed", queue.dequeue());

console.log("all items: ", queue.toString());
console.log("front: ", queue.front());
console.log("size: ", queue.size());
