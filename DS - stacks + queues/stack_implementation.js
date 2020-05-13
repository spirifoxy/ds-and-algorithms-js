class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const node = new Node(value);
        if (!this.length === 0) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.length++;
    }

    pop() {
        if (this.length === 0) {
            return null;
        }
        const node = this.top;
        this.top = this.top.next;
        this.length--;
        return node;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const stack = new Stack();
stack.push("cool");
stack.push("are");
stack.push("structures");
stack.push("data");
console.log(stack.peek());
console.log(stack.isEmpty());
stack.pop();
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());