class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
  
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.first = this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
    }

    dequeue() {
        if (this.length === 0) {
            return null;
        }
        const node = this.first;
        this.first =this.first.next;
        if (!this.first) {
            this.last = null;
        }
        this.length--;
        return node;
    }

    isEmpty() {
        return this.length === 0;
    }
}
  
const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
