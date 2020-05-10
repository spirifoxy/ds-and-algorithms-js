class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            prev: null,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    traverseTo(index) {
        if (index <= 0) {
            return this.head;
        }
        if (index >= this.length) {
            return this.tale;
        }

        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;

    }

    insert(index, value) {
        if (index <= 0) {
            this.prepend(value);
            return this;
        }

        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const prevNode = this.traverseTo(index - 1);

        newNode.prev = prevNode;
        newNode.next = prevNode.next;
        prevNode.next.prev = newNode;
        prevNode.next = newNode;
        this.length++;

        return this;
    }

    remove(index) {
        if (index < 0 || index >= this.length || !this.length) {
            return this;
        }

        if (index === 0) {
            this.head = this.head.next;
            return this;
        }

        const prevNode = this.traverseTo(index - 1);
        prevNode.next = prevNode.next.next;
        prevNode.next.prev = prevNode;
        this.length--;

        return this;
    }


    /**
     * 
     * @param {Node} head
     * @returns {Node} 
     */
    reverse() {
        this.tale = this.head;
        // this.head = this._reverseIteratively(this.head);
        this.head = this._reverseRecursively(this.head);
        return this;
    }

    /**
     * 
     * @param {Node} head
     * @returns {Node} 
     */
    _reverseIteratively(head) {
        if (!head.next) {
            return head;
        }
        let first = head;
        let second = head.next;
        while (second) {
            const tmp = second.next;
            second.next = first;
            first = second;
            second = tmp;
        }
        head.next = null;
        head = first;
        return head;
    } 

    /**
     * 
     * @param {Node} node
     * @returns {Node} 
     */
    _reverseRecursively(node) {
        if (!node.next) {
            return node;
        }

        const newHead = this._reverseRecursively(node.next);
        node.next.next = node;
        node.next = null;
        return newHead;
    }

    print() {
        const arr = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
}

let list = new LinkedList(10);
list.append(5);
list.append(16);
list.append(1);
list.prepend(2);
list.insert(2, 999);
list.remove(3);
console.log(list.print());
list.reverse();
console.log(list.print());