class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
  
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
            return this;
        } 
        
        let current = this.root;
        while (true) {
            if (current.value === value) {
                return this;
            } else if (current.value > value) {
                if (!current.left) {
                    current.left = node;
                    break;
                }
                current = current.left;
            } else if (current.value < value) {
                if (!current.right) {
                    current.right = node;
                    break;
                }
                current = current.right;
            }
        }
        return this;
    }

    lookup(value) {
        let current = this.root;
        while (current) {
            if (current.value === value) {
                break;
            } else if (current.value > value) {
                current = current.left;
            } else if (current.value < value) {
                current = current.right;
            }
        }
        return current;
    }

    remove(value) {
        let current = this.root;
        let prev = null;
        while (current) {
            if (current.value === value) {
                break;
            } else if (current.value > value) {
                prev = current;
                current = current.left;
            } else if (current.value < value) {
                prev = current;
                current = current.right;
            }
        }

        if (!current) {
            return false;
        }

        if (!current.right) {
            if (!prev) {
                this.root = current.left;
            } else if (current.value < prev.value) {
                prev.left = current.left;
            } else {
                prev.right = current.right;
            }
        } else if (!current.right.left) {
            current.right.left = current.left;
            if (!prev) {
                this.root = current.right;
            } else if (current.value < prev.value) {
                prev.left = current.right;
            } else {
                prev.right = current.right;
            }
        } else {
            let parent = current.right;
            let leftmost = parent.left;
            while (leftmost.left) {
                parent = leftmost;
                leftmost = leftmost.left;
            }

            parent.left = leftmost.right;
            leftmost.left = current.left;
            leftmost.right = current.right;
            if (!prev) {
                this.root = leftmost;
            } else if (current.value < prev.value) {
                prev.left = leftmost;
            } else {
                prev.right = leftmost;
            }
        }
        return true;
    }

}
  
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

tree.insert(14);
tree.insert(12);
tree.insert(13);

//         9
//   4          20
// 1   6      15  170
//          14
//        12
//         13  

tree.remove(9);

//         12
//   4          20
// 1   6      15  170
//          14
//        13
//

console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}