// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

const { LinkedList, Node } = require('../linked_list/linked_list')

function circular(list) {
    let slow = list.getFirst();
    let quick = list.getFirst();
    
    while (quick.next && quick.next.next) {
       slow = slow.next;
       quick = quick.next.next;
        if (slow === quick) {
            return true;
        }
    }
    return false;
}
const l = new LinkedList();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
l.head = a;
a.next = b;
b.next = c;
c.next = b;
console.log(circular(l)) // true


module.exports = circular;