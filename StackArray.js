class Stack {
  constructor() {
    this.items = [];
  }

  peek() {
    const lastElement = this.items.length - 1;
    return this.items[lastElement];
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
    this.items.push(value); // no need to return anything
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

      const lastElement = this.items.length - 1;

      // add a comma ONLY if it's not the last element
      if (i < lastElement) {
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
