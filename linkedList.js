import { Node } from "./node.js";

/**
 * Represents a singly linked list data structure.
 * 
 * This class implements a basic linked list with operations like appending
 * and prepending nodes, checking the size of the list, and more.
 * 
 * The list is composed of nodes, each containing a value and a reference
 * to the next node in the list. The linked list maintains a reference to
 * the head node and tracks the total number of nodes in the list.
 * 
 * Private fields:
 * - #headNode: The first node in the linked list (or null if the list is empty).
 * - #length: The total number of nodes in the linked list.
 * 
 * @class LinkedList
 */
class LinkedList {
    #headNode;
    #length;

    /**
     * Creates an empty linked list.
     * 
     * Initializes the linked list with no nodes (headNode is null) and sets
     * the length of the list to 0.
     * 
     * @constructor
     * @returns {void} - Does not return any value. Initializes an empty linked list.
     */
    constructor() {
        this.#headNode = null;
        this.#length = 0;
    }
}

    /**
     * Appends a new node with the given value to the end of the linked list.
     * If the list is empty, the new node becomes the head of the list.
     * 
     * @param {*} value - The value of the new node
     * 
     * @returns {void} - Doesn't return anything. Modifies the linked list
     * 
     * @example
     * const list = new LinkedList();
     * list.append(10);  // Adds a node with value 10 to the end of the list.
     * list.append(20);  // Adds a node with value 20 to the end of the list
     */
    append(value) {
        if (this.#headNode === null) {
            this.#headNode = new Node(value);
            this.#length++;
        } else {
            let node = this.#headNode;
            while (node.nextNode != null) {
                node = node.nextNode;
            }
            node.nextNode = new Node(value);
            this.#length++;
        }
    }

    /**
     * Adds a new node with the given value to the beginning of the list.
     * 
     * @param {*} value - The value to store in the new node.
     * 
     * @returns {void} - This method does not return anything. It modifies the linked list.
     */
    prepend(value) {
        let node = this.#headNode;
        this.#headNode = new Node(value);
        this.#headNode.nextNode = node;
    }

    /**
     * Returns the number of nodes in the list.
     * 
     * @returns {number} - The length of the linked list.
     */
    size() {
        return this.#length;
    }

    /**
     * Returns the first node in the list.
     * 
     * @returns {Node} - The first node in the linked list.
     */
    head() {
        return this.#headNode;
    }

    /**
     * Returns the last node in the list.
     * 
     * @returns {Node} - The last node in the linked list.
     */
    tail() {
        let node = this.#headNode;
        while (node.nextNode != null) {
            node = node.nextNode;
        }

        return node;
    }

    /**
     * Returns a string representation of the linked list.
     * 
     * If the list is empty, returns a message indicating so.
     * Otherwise, returns a string of the form: 
     * ( value ) -> ( value ) -> ... -> null
     * 
     * @returns {string} - A string representing the linked list, or a message if the list is empty.
     */
    toString() {
        if (this.#headNode === null) {
            return "This linked list is empty!";
        } else {
            let node = this.#headNode;
            let nodesString = "";
            while (node.nextNode != null) {
                nodesString += `( ${node.value} ) -> `;
                node = node.nextNode;
            }
            nodesString += `( ${node.value} ) -> `;
            nodesString += "null";
            return nodesString;
        }
    }
}

export { LinkedList };