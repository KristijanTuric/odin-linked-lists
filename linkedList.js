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
        this.#length++;
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
     * Returns the node at the specified index in the linked list.
     * 
     * @param {number} index - The zero-based index of the node to retrieve.
     * 
     * @returns {Node|null} - The node at the given index, or null if the index is out of range.
     * 
     * @example
     * const list = new LinkedList();
     * list.append(10);
     * list.append(20);
     * list.at(1); // Returns the node containing value 20.
     */
    at(index) {
        let selectedNode = 0;
        let node = this.#headNode;

        if (index < 0 || index > this.#length - 1) {
            console.log("Index out of linked list range!");
            return null;
        }
        if (selectedNode === index) return node;
        while (selectedNode != index) {
            node = node.nextNode;
            selectedNode++;
        }
        return node;
    }

    /**
     * Removes the last node from the linked list.
     * 
     * If the list has only one node, it clears the list by setting the head to null.
     * If the list is empty, it prints out a message.
     * 
     * @returns {void} - This method does not return anything. It modifies the linked list.
     * 
     * @example
     * const list = new LinkedList();
     * list.append(10);
     * list.append(20);
     * list.pop(); // Removes the last node (20) from the list.
     */
    pop() {
        if (this.#headNode === null)  {
            console.log("You are trying to pop() and empty linked list!");
            return;
        }
        if (this.#length === 1) {
            this.#headNode = null;
            this.#length = 0;
            return;
        }
        let node = this.#headNode;
        let previousNode = null;
        while (node.nextNode != null) {
            previousNode = node;
            node = node.nextNode;
        }

        previousNode.nextNode = null;
        this.#length--;
    }

    /**
     * Checks if the linked list contains a node with the specified value.
     * 
     * @param {*} value - The value to search for in the linked list.
     * 
     * @returns {boolean} - Returns true if a node with the given value is found, otherwise false.
     */
    contains(value) {
        let node = this.#headNode;
        if (node.value === value) {
            return true;
        }
        while (node.nextNode != null) {
            node = node.nextNode;
            if (node.value === value) {
                return true;
            }
        }

        return false;
    }

    /**
     * Finds the index of the first node containing the specified value.
     * 
     * @param {*} value - The value to search for in the linked list.
     * 
     * @returns {number|null} - The index of the node containing the value, or null if not found.
     */
    find(value) {
        let index = 0;
        let node = this.#headNode;
        if (node.value === value) {
            return index;
        }
        while (node.nextNode != null) {
            node = node.nextNode;
            index++;
            if (node.value === value) {
                return index;
            }
        }

        return null;
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

    /**
     * Inserts a new node with the specified value at the given index in the linked list.
     * 
     * @param {*} value - The value to store in the new node.
     * @param {number} index - The index at which to insert the new node.
     * 
     * @returns {void} - This method does not return anything. It modifies the linked list.
     * 
     * @throws {Error} - Logs a message if the index is out of range.
     */
    insertAt(value, index) {
        if (index > this.#length || index < 0) {
            console.log("Index is out of linked list range");
            return;
        }

        let node = this.#headNode;
        let previousNode = null;
        let nextNode = null;
        let currentIndex = 0;

        if (index === currentIndex) {
            this.#headNode = new Node(value, nextNode = node);
            this.#length++;
            return;
        }

        while (currentIndex != index) {
            previousNode = node;
            node = node.nextNode;
            currentIndex++;
        }

        nextNode = node;

        previousNode.nextNode = new Node(value, nextNode);
        this.#length++;
    }
}

export { LinkedList };