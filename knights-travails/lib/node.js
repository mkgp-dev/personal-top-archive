export default class Node {
    constructor(position, prevNode = null) {
        this.position = position;
        this.prevNode = prevNode;
    }
}