class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  peek() {
    return this.items[this.count - 1];
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
  }

  pop() {
    const result = this.items[this.items.count];
    delete this.items[this.items.count];
    this.count--;
    return result;
  }

  push(value) {
    this.items[this.count] = value;
    this.count++;
  }

  toString() {
    if (this.isEmpty()) {
      return undefined;
    }

    let string = "";

    for (let i = 0; i < this.count; i++) {
      console.log("this.items[i]", this.items[i]);
      string += this.items[i];

      if (i < this.count - 1) {
        string += ", ";
      }
    }

    return string;
  }
}

const stack = new Stack();

stack.push("hamlet");
stack.push("gabi");
stack.push("mateus");

console.log(stack.toString());
console.log(stack.peek());
