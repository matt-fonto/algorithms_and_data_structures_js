class Stack {
  constructor() {
    this.items = [];
  }

  peek() {
    return this.items[this.items.length - 1];
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

  pop() {
    return this.items.pop();
  }

  push(value) {
    return this.items.push(value);
  }

  toString() {
    if (this.isEmpty()) {
      return undefined;
    }

    // method 1: join
    // return this.items.join(", ");

    // method 2: for loop
    let string = "";

    for (let i = 0; i < this.items.length; i++) {
      string += this.items[i];

      // add a comma ONLY if it's not the last element
      if (i < this.items.length - 1) {
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

stack.pop();

console.log(stack.size());
console.log(stack.peek());
