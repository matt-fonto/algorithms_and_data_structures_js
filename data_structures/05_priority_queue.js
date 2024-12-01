/* 
    In a priority queue, the data structure should allow a priority to be added
    It should deque from highest to lowest priority

    enqueue(element, priority) - Adds an element to the queue with a given priority.
    dequeue() - Removes and returns the element with the highest (or lowest) priority.
    peek() - Returns the element with the highest (or lowest) priority without removing it.
    isEmpty() - Checks if the queue is empty.
    size() - Returns the number of elements in the queue."
*/

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    const node = { element, priority };

    if (this.isEmpty()) {
      this.queue.push(node);
    } else {
      let hasBiggerPriority = false;

      for (let i = 0; i < this.queue.length; i++) {
        if (priority > this.queue[i].priority) {
          this.queue.splice(i, 0, node);
          hasBiggerPriority = true;
          break;
        }
      }

      if (!hasBiggerPriority) {
        this.queue.push(node);
      }
    }

    // this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.queue.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.queue[0];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.queue.length;
  }

  toString() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.queue
      .map((node) => `${node.element}: ${node.priority}`)
      .join(", ");
  }
}

const pq = new PriorityQueue();
pq.enqueue("task1", 3);
pq.enqueue("task2", 1);
pq.enqueue("task3", 2);

console.log(pq.toString());
pq.dequeue();
console.log(pq.toString());
