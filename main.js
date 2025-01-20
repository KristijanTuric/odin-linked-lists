import { LinkedList } from "./linkedList.js";

let linkedList = new LinkedList();

console.log(linkedList.toString());

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(-4);
linkedList.append(5);
linkedList.append(6);
console.log(linkedList.toString());

linkedList.prepend(55);
console.log(linkedList.toString());

linkedList.prepend(44);
console.log(linkedList.toString());

console.log(linkedList.head());

console.log(linkedList.tail());

console.log("\nTesting the at(index) function");
console.log(linkedList.at(2));
console.log(linkedList.at(125));
console.log(linkedList.at(-2));
console.log(linkedList.at(0));

