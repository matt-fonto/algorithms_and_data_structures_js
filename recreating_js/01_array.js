class CustomArrayAsArray {
  constructor(...items) {
    this.items = [...items];
  }

  // add element to end
  push(value) {
    this.items[this.items.length] = value;
    return this.items.length;
  }

  // remove and return last element
  pop() {
    if (this.items.length === 0) {
      return undefined;
    }

    const lastItem = this.items[this.items.length - 1];
    this.items.length -= 1;
    return lastItem;
  }

  // remove and return first element
  shift() {
    if (this.items.length === 0) {
      return undefined;
    }

    const firstElement = this.items[0];
    this.items = this.items.slice(1);
    return firstElement;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.items.length;
  }

  // add elements to the beginning
  unshift(...values) {
    this.items = [...values, ...this.items];
    return this.items.length;
  }

  // execute callback for each element
  forEach(callback) {
    for (let i = 0; i < this.items.length; i++) {
      // cb(currentElement, i, reference to instance)
      callback(this.items[i], i, this);
    }
  }

  // apply a callback to each element and return a new custom array
  map(callback) {
    const result = new CustomArrayAsArray();

    for (let i = 0; i < this.items.length; i++) {
      result.push(callback(this.items[i], i, this));
    }
  }

  toString() {
    return this.items.join(",");
  }

  get(index) {
    return this.items[index];
  }

  // Support for `for ... of` and `Array.from()`
  [Symbol.iterator]() {
    let index = 0;

    return {
      next: () => {
        if (index < this.items.length) {
          return { value: this.items[index++], done: false };
        }

        return { done: true };
      },
    };
  }
}
