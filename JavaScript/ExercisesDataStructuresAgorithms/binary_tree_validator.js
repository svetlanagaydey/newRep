// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent


class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  
    insert(data) {
      if (data < this.data && this.left) {
        this.left.insert(data);
      } else if (data < this.data) {
        this.left = new Node(data);
      } else if (data > this.data && this.right) {
        this.right.insert(data);
      } else if (data > this.data) {
        this.right = new Node(data);
      }
    }
}

function validate(node, min = null, max = null) {
    if (max !== null && node.data > max) {
      return false;
    }
  
    if (min !== null && node.data < min) {
      return false;
    }
  
    if (node.left) {
        return validate(node.left, min, node.data);
    }
  
    if (node.right) {
        return validate(node.right, node.data, max);
    }

    return true;
  }

// Stephan's solution
// function validate(node, min = null, max = null) {
//     if (max !== null && node.data > max) {
//       return false;
//     }
//     if (min !== null && node.data < min) {
//       return false;
//     }
//     if (node.left && !validate(node.left, min, node.data)) {
//       return false;
//     }
//     if (node.right && !validate(node.right, node.data, max)) {
//       return false;
//     }
//     return true;
//   }

let first = new Node(1);
first.insert(2);
first.left = new Node(4);
first.insert(-2);
first.insert(-20);
first.insert(-18);
first.insert(5);
first.insert(3);
first.insert(7);
console.log(validate(first));