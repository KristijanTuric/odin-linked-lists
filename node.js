/**
 * Represents a single node in a linked list.
 * Each node contains a value and a reference to the next node in the list.
 * 
 * A node is a basic unit of a linked list data structure. It stores:
 * - A value, which can be any type (e.g., number, string, object).
 * - A reference to the next node in the list, or null if this is the last node.
 * 
 * @class Node
 */
class Node {
    /**
     * Creates an instance of a node.
     * 
     * @param {*} value - The value to store in the node. Defaults to null if no value is provided.
     * @param {Node|null} nextNode - The reference to the next node in the list. Defaults to null if there is no next node.
     * 
     * @example
     * const node1 = new Node(10); // Creates a node with value 10 and no next node.
     * const node2 = new Node(20, node1); // Creates a node with value 20, and links it to node1.
     */
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export { Node };