/* 
            7 -> root / parent
          /  \  subtrees
   left 3    10 right child / siblings
       /  \  / \
      1   5 9  12 left
    
- It has max 2 children
- It's ordered. 
> Each left subtree is less than or equal to the parent node
  > Every left child is smaller than its parent
> Each right subtree is bigger than or equal to the parent node
 > Every right child is bigger than its parent

Implement a BST with:
- Insert, search, delete, traverse the tree (in-order, pre-order, post-order), find min and max value, find height of the tree, check if tree is balanced
 */

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    const runLoop = true;

    while (runLoop) {
      // check if values are equal
      if (value === currentNode.value) {
        return undefined;
      }

      if (value < currentNode.value) {
        // if we should go left
        // if subtree is empty, we add it here
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }

        // else keep searching
        currentNode = currentNode.left;
      } else {
        // if we should go right
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }

        currentNode = currentNode.right;
      }
    }
  }

  search(value) {
    if (!this.root) {
      return false;
    }

    let current = this.root;

    while (current) {
      if (value === current.value) {
        return true;
      }

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  // traverse leftward
  findMin() {
    if (!this.root) {
      return null;
    }

    let current = this.root;

    while (current.left) {
      current = current.left;
    }

    return current.value;
  }

  // traverse rightward
  findMax() {
    if (!this.root) {
      return null;
    }

    let current = this.root;

    while (current.right) {
      current = current.right;
    }

    return current.value;
  }
}
