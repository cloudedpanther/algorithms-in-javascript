// const INPUT_1 = ["7 3"];

// const input = INPUT_1;

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class CircularLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (this.head === null) {
//       newNode.next = newNode;
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.next = this.head;
//       this.tail = newNode;
//     }
//     this.size++;
//   }
//   pop() {
//     const returnValue = this.head.value;
//     if (this.size === 1) {
//       this.head = null;
//       this.tail = null;
//       this.size--;
//       return returnValue;
//     }
//     this.head = this.head.next;
//     this.tail.next = this.head;
//     this.size--;

//     return returnValue;
//   }
// }

// const solution = (input) => {
//   const [N, K] = input[0].split(" ").map(Number);
//   const answer = [];
//   const queue = new CircularLinkedList();
//   let count = 1;
//   for (let i = 1; i < N + 1; i++) {
//     queue.push(i);
//   }
//   while (queue.size > 0) {
//     if (K !== count++) queue.push(queue.pop());
//     else {
//       answer.push(queue.pop());
//       count = 1;
//     }
//   }

//   console.log(`<${answer.join(", ")}>`);
// };

// solution(input);
