class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let curNode = this.head;
        let preNode = curNode;
        while (curNode.next) {
            preNode = curNode;
            curNode = curNode.next;
        }
        this.tail = preNode;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return curNode;
    }

    shift() {
        if (!this.head) return undefined;
        const curHead = this.head;
        this.head = curHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return curHead;
    }

    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(pos) {
        if (pos < 0 || pos >= this.length) return undefined;
        let count = 0;
        let curNode = this.head;
        while (count < pos) {
            curNode = curNode.next;
            count++;
        }
        return curNode
    }

    set(pos, val) {
        const foundNode = this.get(pos);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(pos, val) {
        if (pos < 0 || pos > this.length) return false;
        if (pos === 0) this.unshift(val);
        else if (pos === this.length) this.push(val);
        else {
            const newNode = new Node(val);
            const prevNode = this.get(pos - 1);
            const temp = prevNode.next;
            newNode.next = temp;
            prevNode.next = newNode;
            this.length++;
        }
        return true;
    }

    remove(pos) {
        if (pos < 0 || pos >= this.length) return undefined;
        if (pos === this.length - 1) return this.pop();
        if (pos === 0) return this.shift();
        const prevNode = this.get(pos - 1);
        const remNode = prevNode.next;
        prevNode.next = remNode.next;
        this.length--;
        return remNode;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}
