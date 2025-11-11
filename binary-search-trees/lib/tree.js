import Node from "./node.js";

export default class Tree {
    constructor(array = []) {
        this.root = this.buildTree(array);
    }

    #_build(array, low, high) {
        if (low > high) return null;
        const middle = Math.floor((low + high) / 2);
        const node = new Node(array[middle]);
        node.left = this.#_build(array, low, middle - 1);
        node.right = this.#_build(array, middle + 1, high);
        return node;
    }

    #_insert(node, value) {
        if (!node) return new Node(value);

        if (value === node.data) return node;

        if (value < node.data) node.left = this.#_insert(node.left, value);
        else node.right = this.#_insert(node.right, value);

        return node;
    }

    #_min(node) {
        while (node && node.left) node = node.left;
        return node;
    }

    #_delete(node, value) {
        if (!node) return null;

        if (value < node.data) node.left = this.#_delete(node.left, value);
        else if (value > node.data) node.right = this.#_delete(node.right, value);
        else {
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            const success = this.#_min(node.right);
            node.data = success.data;
            node.right = this.#_delete(node.right, success.data);
        }

        return node;
    }

    #_traverse(str, node, callback) {
        if (!node) return;

        if (str === 'inOrderForEach') {
            this.#_traverse(str, node.left, callback);
            callback(node);
            this.#_traverse(str, node.right, callback);
        } else if (str === 'preOrderForEach') {
            callback(node);
            this.#_traverse(str, node.left, callback);
            this.#_traverse(str, node.right, callback);
        } else if (str === 'postOrderForEach') {
            this.#_traverse(str, node.left, callback);
            this.#_traverse(str, node.right, callback);
            callback(node);
        }
    }

    #_height(node) {
        if(!node) return -1;
        const leftHeight = this.#_height(node.left);
        const rightHeight = this.#_height(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    #_check(node) {
        if (!node) return { balanced: true, height: -1 };
        const left = this.#_check(node.left);
        if (!left.balanced) return { balanced: false, height: 0 };
        
        const right = this.#_check(node.right);
        if (!right.balanced) return { balanced: false, height: 0 };

        const balanced = Math.abs(left.height - right.height) <= 1;
        const height = Math.max(left.height, right.height) + 1;
        return { balanced, height };
    }

    buildTree(array) {
        const sort = [...new Set(array)].sort((a, b) => a - b);
        return this.#_build(sort, 0, sort.length - 1);
    }

    insert(value) {
        this.root = this.#_insert(this.root, value);
    }

    deleteItem(value) {
        this.root = this.#_delete(this.root, value);
    }

    find(value) {
        let curr = this.root;
        while (curr) {
            if (value === curr.data) return curr;
            curr = value < curr.data ? curr.left : curr.right;
        }

        return null;
    }

    levelOrderForEach(callback) {
        if (typeof callback !== 'function') throw new Error('levelOrderForEach requires a callback function.');

        if (!this.root) return;
        const queue = [this.root];
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            callback(node);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    inOrderForEach(callback) {
        if (typeof callback !== 'function') throw new Error('inOrderForEach requires a callback function.');
        this.#_traverse('inOrderForEach', this.root, callback);
    }

    preOrderForEach(callback) {
        if (typeof callback !== 'function') throw new Error('preOrderForEach requires a callback function.');
        this.#_traverse('preOrderForEach', this.root, callback);
    }

    postOrderForEach(callback) {
        if (typeof callback !== 'function') throw new Error('postOrderForEach requires a callback function.');
        this.#_traverse('postOrderForEach', this.root, callback);
    }

    height(value) {
        const start = this.find(value);
        if (!start) return null;

        return this.#_height(start);
    }

    depth(value) {
        let curr = this.root;
        let d = 0;
        while (curr) {
            if (value === curr.data) return d;
            curr = value < curr.data ? curr.left : curr.right;
            d++;
        }

        return null;
    }

    isBalanced() {
        return this.#_check(this.root).balanced;
    }

    rebalance() {
        const values = [];
        this.inOrderForEach((node) => values.push(node.data));
        this.root = this.buildTree(values);
    }
}