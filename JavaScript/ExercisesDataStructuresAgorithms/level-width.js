// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }
} 

function levelWidth(node) {
    let result = [0];
    let array = [node, 's'];

    while (array.length > 1) {
        let first = array.shift();
        if (first === "s") {
            result.push(0);
            array.push(first);
        } else {
            result[result.length-1]++;
            array = [...array, ...first.children];
        }
    }
    return result;
}


let root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);
console.log(levelWidth(root));
