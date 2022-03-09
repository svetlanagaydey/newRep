const { LinkedList } = require('../linked_list/linked_list')
// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.


function midpoint(list) {}

module.exports = midpoint;

function midpoint(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow
}
const l = new LinkedList();
  l.insertLast('a')
  l.insertLast('b')
  l.insertLast('c')
  console.log(midpoint(l)); // returns { data: 'b' }