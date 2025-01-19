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