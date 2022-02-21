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
    let result = new Queue();
    console.log(result.data)
    for (let i=sourceOne.data.length - 1; i >= 0; i--) {
        result.add(sourceOne.peek());
        sourceOne.remove();
        if (sourceTwo.peek()) {
            result.add(sourceTwo.peek());
            sourceTwo.remove();
        }   
    }
    if (sourceOne.data.length === 0 && sourceTwo.data.length !==0) {
        sourceTwo.data.forEach(element => {
            result.add(element);
        });
    }
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
