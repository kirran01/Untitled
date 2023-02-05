////////// remove duplicates from linked list /////////

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// const a = new Node("a");
// const z = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const y = new Node("d");
// const d = new Node("d");

// a.next = z;
// z.next = b;
// b.next = c;
// c.next = y;
// y.next = d;

// const printLinkedList = (head) => {
//   let current = head;
//   while (current !== null) {
//     console.log(current.val);
//     current = current.next;
//   }
// };

// // A->A->B->C->D->D

// function removeDuplicates(head) {
//   // Use a set to store the values of the nodes we have seen
//   var seen = new Set();

//   // Start at the head of the list
//   var node = head;

//   // Keep track of the previous node so we can remove duplicates
//   var prev;

//   while (node !== null) {
//     // If the value is in the set, remove the node
//     if (seen.has(node.val)) {
//       prev.next = node.next;
//     }
//     // Otherwise, add the value to the set and move to the next node
//     else {
//       seen.add(node.val);
//       prev = node;
//     }
//     node = node.next;
//   }
// }

// removeDuplicates(a);
// printLinkedList(a);
