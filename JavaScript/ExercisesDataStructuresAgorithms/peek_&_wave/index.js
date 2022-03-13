// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

class Queue {
    constructor() {
      this.data = [];
    }
  
    add(record) {
      this.data.unshift(record);
    }
  
    remove() {
      return this.data.pop();
    }
    
    peek() {
        return this.data[this.data.length-1]
    }
  }

  function weave(sourceOne, sourceTwo) {
    const result = new Queue();
    console.log(result.data);

    while (sourceOne.peek() || sourceTwo.peek()) {
      if (sourceOne.peek()) {
        result.add(sourceOne.remove());
      }
      if (sourceTwo.peek()) {
        result.add(sourceTwo.remove());
      }
    }
    // for (let i=sourceOne.data.length - 1; i >= 0; i--) {
    //     result.add(sourceOne.peek());
    //     sourceOne.remove();
    //     if (sourceTwo.peek()) {
    //         result.add(sourceTwo.peek());
    //         sourceTwo.remove();
    //     }   
    // }
    // if (sourceOne.data.length === 0 && sourceTwo.data.length !==0) {
    //     sourceTwo.data.forEach(element => {
    //         result.add(element);
    //     });
    // }
    return result;
}

const q1 = new Queue();
q1.add(1);
q1.add(2);
//   q1.add(3);

const q2 = new Queue();
q2.add('a');
q2.add('b');
q2.add('c');
q2.add('d');

console.log(weave(q1, q2));
