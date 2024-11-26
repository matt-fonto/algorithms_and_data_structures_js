// enqueue -> add back
// dequeue -> remove front
// size, clear, isEmpty, toString

// ['mary' -> 2, 'susan' -> 1, 'john' -> 0]

class Queue {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  front() {
    return this.isEmpty() ? undefined : this.items[0];
  }

  dequeue() {
    return this.items.shift();
  }

  toString() {
    if (this.isEmpty()) {
      return ""; // return empty string for consistent output
    }

    let string = "";

    for (let i = 0; i < this.items.length; i++) {
      string += this.items[i];

      if (i < this.items.length - 1) {
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

console.log(queue.toString());
console.log(queue.front());
console.log(queue.size());

queue.dequeue();

console.log(queue.toString());
console.log(queue.front());
console.log(queue.size());

queue.dequeue();

console.log(queue.toString());
console.log(queue.front());
console.log(queue.size());
