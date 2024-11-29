class CustomArray {
  constructor(...items) {
    this.items = [...items];
  }

  pop() {
    // check if it's undefined
    if (this.items.length === 0) {
      return undefined;
    }

    // save last item
    const lastItem = this.items[this.items.length - 1];

    // remove last item / reduce the length
    this.items.length -= 1;

    // return last item
    return lastItem;
  }

  push(...items) {
    // add one or many elements
    this.items = [...this.items, ...items];
    // return new length
    return this.items.length;
  }

  // removes first item and return it
  shift() {
    if (this.items.length === 0) {
      return undefined;
    }

    // save first item
    const firstItem = this.items[0];

    // remove first item
    this.items = this.items.slice(1);

    // return first item
    return firstItem;
  }

  // add one or more items to the beginning
  unshift(...items) {
    // add items to beginning
    this.items = [...items, ...this.items];

    // return new length
    return this.items.length;
  }

  // apply callback to each item
  forEach(callback) {
    // loop through each element
    for (let i = 0; i < this.items.length; i++) {
      // apply callback to each element
      // callback(item, iteration, array)
      callback(this.items[i], i, this);
    }
  }

  // returns a new array with the result of callback
  map(callback) {
    // initialize new array
    const newArr = new CustomArray();

    // loop through each element and apply callback
    for (let i = 0; i < this.items.length; i++) {
      newArr.push(callback(this.items[i], i, this));
    }

    return newArr;
    // return new array with result from callback
  }

  // returns a new array with items that match function
  filter(callback) {
    const newArr = new CustomArray();

    for (let i = 0; i < this.items.length; i++) {
      if (callback(this.items[i], i, this)) {
        newArr.push(this.items[i]);
      }
    }

    return newArr;
  }

  // some() {}

  // includes() {}

  // concat() {}
}

const customArr = new CustomArray(1, 2, 3);

console.log(customArr);
console.log(customArr.pop());
console.log(customArr.push("hello", 4, 5, 6));
console.log(customArr);

customArr.forEach((element) => {
  console.log(element);
});

const newArr = customArr.map((element) => element * 2);

console.log("newArr", newArr);
