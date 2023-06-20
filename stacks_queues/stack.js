class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size;
    }

    pop() {
        if (!this.size) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        }
        this.first = temp.next;
        this.size--;
        return temp.value;
    }
}



