// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter((node) => {
            return node.data !== data;
        })
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    traverseBF(fn) {
        let arr = [this.root];
        let result = [];
        while(arr.length) {
            const node = arr.shift();
            result.push(node);
            arr.push(...node.children);
            // fn(node);
        }
        result.forEach((child) => {
            console.log(child.data);
        })
    }
    traverseDF() {
        let arr = [this.root];
        let result = [];
        while(arr.length) {
            const node = arr.shift();
            result.push(node);
            arr.unshift(...node.children);
            // fn(node);
        }
        result.forEach((child) => {
            console.log(child.data);
        })
    }
}

let node1 = new Node("node1");

let tree = new Tree();

node1.add("node2");
node1.add("node3");
node1.add("node4");
node1.children[0].add("node5");
node1.children[0].add("node6");
node1.children[0].add("node7");
node1.children[2].add("node8");
node1.children[2].add("node9");

tree.root = node1;
tree.traverseBF();
console.log("------------")
tree.traverseDF();