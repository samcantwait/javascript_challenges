class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        const poppedTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedTail.prev;
            this.tail.next = null;
            poppedTail.prev = null;
        }
        this.length--;
        return poppedTail;
    }

    shift() {
        if (!this.head) return undefined;
        const shiftedHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftedHead.next;
            this.head.prev = null;
            shiftedHead.next = null;
        }
        this.length--;
        return shiftedHead;
    }

    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(pos) {
        if (pos < 0 || pos >= this.length) return null;
        let counter, curNode;
        if (pos > this.length / 2) {
            counter = this.length - 1;
            curNode = this.tail;
            while (pos < counter) {
                curNode = curNode.prev;
                counter--;
            }
            return curNode;
        } else {
            counter = 0;
            curNode = this.head;
            while (pos > counter) {
                curNode = curNode.next;
                counter++;
            }
            return curNode;
        }
    }

    set(pos, val) {
        const getNode = this.get(pos);
        if (getNode) {
            getNode.val = val;
            return true;
        }
        return false;
    }

    insert(pos, val) {
        if (pos < 0 || pos > this.length) return false;
        if (pos === this.length) return !!this.push(val);
        if (pos === 0) return !!this.unshift(val);
        const getNode = this.get(pos - 1);
        const newNode = new Node(val);
        const nextNode = getNode.next;
        newNode.next = nextNode;
        newNode.prev = getNode;
        nextNode.prev = newNode;
        getNode.next = newNode;
        this.length++;
        return true;
        return false;
    }

    remove(pos) {
        if (pos < 0 || pos > this.length) return undefined;
        if (pos === 0) return this.shift();
        if (pos === this.length - 1) return this.pop();
        const delNode = this.get(pos);
        const prevNode = delNode.prev;
        const nextNode = delNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        delNode.next = delNode.prev = null;
        this.length--;
        return delNode;
    }

    reverse() {
        const temp = this.tail;
        this.tail = this.head;
        this.head = temp;
        let curNode = this.head;
        for (let i = 0; i < this.length; i++) {
            const prev = curNode.next;
            curNode.next = curNode.prev;
            curNode.prev = prev;
            curNode = curNode.next;
        }
        return this;
    }
}

const list = new DoublyLinkedList();
