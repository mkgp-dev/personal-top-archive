import Node from "./node.js";

export default class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    #empty() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(value) {
        const node = new Node(value);
        if (!this._head) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.nextNode = node;
            this._tail = node;
        }

        this.length++;
    }

    prepend(value) {
        const node = new Node(value, this._head);
        this._head = node;

        if (!this._tail) this._tail = node;

        this.length++;
    }

    size() {
        return this.length;
    }

    head() {
        if (this.length === 0) return null;
        return this._head.value;
    }

    tail() {
        if (this.length === 0) return null;
        return this._tail.value;
    }

    at(index) {
        if (index < 0 || index >= this.length) return null;

        let curr = this._head;
        for (let i = 0; i < index; i++) curr = curr.nextNode;

        return curr;
    }

    pop() {
        if (!this._head) return null;

        if (this.length === 1) {
            const curr = this._head;
            this.#empty();
            return curr;
        }

        let curr = this._head;
        while (curr.nextNode !== this._tail) curr = curr.nextNode;

        const del = this._tail;
        curr.nextNode = null;
        this._tail = curr;
        this.length--;

        return del;
    }

    contains(value) {
        let curr = this._head;
        while (curr) {
            if (curr.value === value) return true;
            curr = curr.nextNode;
        }

        return false;
    }

    find(value) {
        let curr = this._head;
        let idx = 0;

        while(curr) {
            if (curr.value === value) return idx;
            curr = curr.nextNode;
            idx++;
        }

        return null;
    }

    toString() {
        let curr = this._head;
        let str = '';

        while(curr) {
            str += `( ${curr.value} ) -> `;
            curr = curr.nextNode;
        }

        str += 'null';
        return str;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.length) return 'Out of range';

        if (index === 0) return this.prepend(value);
        if (index === this.length) return this.append(value);

        const prev = this.at(index - 1);
        const node = new Node(value, prev.nextNode);
        prev.nextNode = node;

        this.length++;
    }

    removeAt(index) {
        if (index < 0 || index > this.length) return 'Out of range';

        if (index === 0) {
            const del = this._head;
            this._head = this._head.nextNode;
            this.length--;

            if (this.length === 0) this._tail = null;
            return del;
        }

        const prev = this.at(index - 1);
        const del = prev.nextNode;
        prev.nextNode = del.nextNode;

        if (del === this._tail) this._tail = prev;
        this.length--;

        return del;
    }
}