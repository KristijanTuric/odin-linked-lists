class Node {
    /**
     * Represents a single node in a linked list.
     * @param {*} value - The value to store in the node.
     * @param {Node|null} nextNode - The reference to the next node in the list.
     */
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}