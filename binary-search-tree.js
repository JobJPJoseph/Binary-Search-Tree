// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // Your code here
    if (this.root === null) {
      this.root = new TreeNode(val);
      return this.root;
    }

    if (currentNode === null) return new TreeNode(val);

    if (val < currentNode.val) {
      currentNode.left = this.insert(val, currentNode.left);
    } else {
      currentNode.right = this.insert(val, currentNode.right);
    }

    return currentNode;
  }

  search(val) {
    // Your code here
    // Do this iteratively
    // Don't use useless pointers
    let node = this.root;

    while (node !== null) {
      if (node.val === val) return true;

      if (val < node.val) {
        node = node.left;
      } else {
        node = node.right;
      }

    }

    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };
