// <<<<<<<<<<<<<<<<<<<< Stack >>>>>>>>>>>>>>>>>>>>

// class Stack {
//   constructor(arr) {
//     this.arr = [];
//   }
//   addToStack(elemToAdd) {
//     this.arr.push(elemToAdd);
//   }
//   removeFromStack() {
//     return this.arr.pop();
//   }
//   peekStack() {
//     if (this.arr.length !== 0) {
//       return this.arr[this.arr.length - 1];
//     }
//   }
//   seeAll() {
//     return this.arr;
//   }
// }

// const pringles = new Stack();

// pringles.addToStack("chip1");
// pringles.addToStack("chip2");
// pringles.addToStack("chip3");

// console.log(pringles.peekStack(), "<--top of stack");
// console.log(pringles.seeAll(), "<--all data");

// <<<<<<<<<<<<<<<<<<<< Queue >>>>>>>>>>>>>>>>>>>>

// class Queue {
//   constructor(arr) {
//     this.arr = [];
//   }
//   enqueue(data) {
//     this.arr.unshift(data);
//   }
//   dequeue() {
//     this.arr.pop();
//   }
//   checkFirst() {
//     return this.arr[this.arr.length - 1];
//   }

//   checkLast() {
//     return this.arr[0];
//   }

//   getAll() {
//     return this.arr;
//   }
// }

// const boringLine = new Queue();
// boringLine.enqueue("person1");
// boringLine.enqueue("person2");
// boringLine.enqueue("person3");

// console.log(boringLine.checkFirst(), "<--check first");
// console.log(boringLine.checkLast(), "<--check last");
// console.log(boringLine.getAll(), "<--whole queue");



// <<<<<<<<<<<<<<<<<<<< LinkedList >>>>>>>>>>>>>>>>>>>>

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const a = new Node(1);
// const b = new Node(2);
// const c = new Node(3);
// const d = new Node(4);

// a.next = b;
// b.next = c;
// c.next = d;

//--- print all ---

// const printLinkedList=(head)=>{
// let current=head
// while(current!==null){
//     console.log(current.val)
//     current=current.next
// }
// }

// printLinkedList(a)

// const printLinkedListR = (head) => {
//   if (head === null) {
//     return;
//   }
//   console.log(head.val);
//   printLinkedList(head.next);
// };

// printLinkedListR(a)

//--- store values into array ---

// const linkedListValues = (head) => {
//   const values=[]
//   let current = head;
//   while (current !== null) {
//     values.push(current.val)
//     current = current.next;
//   }
//   return values
// };

// console.log(linkedListValues(a))

// const linkedListValuesR = (head) => {
//   const values = [];
//   fillvalues(head, values);
//   return values;
// };

// const fillvalues = (head, values) => {
//   if (head == null) {
//     return;
//   }
//   values.push(head.val);
//   fillvalues(head.next, values);
// };

// console.log(linkedListValuesR(a))

//--- sum list ---

// console.log(sumLinkedList(a));

// const sumLinkedListR = (head) => {
//   if (head == null) {
//     return 0;
//   }
//   return head.val + sumLinkedList(head.next);
// };

// console.log(sumLinkedListR(a));

//--- find a target ---

// const findTarget = (head, target) => {
//   let current = head;
//   while (current !== null) {
//     if (current.val == target) {
//       return true;
//     }
//     current = current.next;
//   }
//   return false;
// };

// console.log(findTarget(a,3))

// const findTargetR=(head, target)=>{
// if(head==null) return false
// if(head.value==target) return true
// return findTarget(head.next, target)
// }

// console.log(findTargetR(a,3))

//--get a node value---

// const getNodeValue = (head,index) => {
//   let current = head;
//   let count = 0;
//   while (current !== null) {
//     count += 1;
//     current = current.next;
//   }
//   return null;
// };

// const getNodeValueR = (head,index) => {
//   if (head == null) return 0;
//   if (index == 0) return head.val;
//   return getNodeValue(head.next, index - 1);
// };

//---reverse list -----

// const reverseList = (head) => {
//   let previous = null;
//   let current = head;
//   while (current !== null) {
//     const next = current.next;
//     current.next = previous;
//     previous = current;
//     current = next;
//   }
//   return previous;
// };

// const reverseListR=(head)=>{
// if(head==null) return previous
// const next=head.next
// head.next=previous
// return reverseList(next, head)
// }

// console.log(reverseListR(d));

// <<<<<<<<<<<<<<<<<<<< Binary Tree >>>>>>>>>>>>>>>>>>>>

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const depthFirst = (root) => {
//   if (root == null) return [];
//   const result = [];
//   const stack = [root];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     result.push(current.val);
//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }
//   return result;
// };

// const depthFirstR = (root) => {
//   if (root == null) return [];
//   const leftVals = depthFirstR(root.left);
//   const rightVals = depthFirstR(root.right);
//   return [root.val, ...leftVals, ...rightVals];
// };

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// const breadthFirst = (root) => {
//   if ((root = null)) return [];
//   const values = [];
//   const queue = [root];

//   while (queue.length > 0) {
//     const current = queue.shift();
//     values.push(current.val);
//     if (current.left !== null) queue.push(current.left);
//     if (current.right !== null) queue.push(current.right);
//   }
//   return values;
// };

//       a
//      / \
//     b   c
//    / \   \
//   d  e    f

// console.log(breadthFirst(a));
