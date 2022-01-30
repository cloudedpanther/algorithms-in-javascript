// const INPUT_1 = [
//   "15",
//   "push_back 1",
//   "push_front 2",
//   "front",
//   "back",
//   "size",
//   "empty",
//   "pop_front",
//   "pop_back",
//   "pop_front",
//   "size",
//   "empty",
//   "pop_back",
//   "push_front 3",
//   "empty",
//   "front",
//   "pop_back",
//   "pop_back",
//   "pop_back",
//   "front",
// ];

// const input = INPUT_1;

// // push_front X: 정수 X를 덱의 앞에 넣는다.
// // push_back X: 정수 X를 덱의 뒤에 넣는다.
// // pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// // pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// // size: 덱에 들어있는 정수의 개수를 출력한다.
// // empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
// // front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// // back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.prev = null;
//     this.next = null;
//   }
// }

// class Deque {
//   constructor() {
//     this.start = null;
//     this.end = null;
//     this.length = 0;
//   }
//   push_front(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.start = newNode;
//       this.end = newNode;
//     } else {
//       this.start.prev = newNode;
//       newNode.next = this.start;
//       this.start = newNode;
//     }
//     this.length++;
//   }
//   push_back(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.start = newNode;
//     } else {
//       this.end.next = newNode;
//       newNode.prev = this.end;
//     }
//     this.end = newNode;
//     this.length++;
//   }
//   pop_front() {
//     if (this.length === 0) return -1;

//     const returnNode = this.start.value;
//     if (this.length === 1) {
//       this.start = null;
//       this.end = null;
//     } else {
//       this.start = this.start.next;
//       this.start.prev = null;
//     }
//     this.length--;
//     return returnNode;
//   }
//   pop_back() {
//     if (this.length === 0) return -1;

//     const returnNode = this.end.value;
//     if (this.length === 1) {
//       this.start = null;
//       this.end = null;
//     } else {
//       this.end = this.end.prev;
//       this.end.next = null;
//     }
//     this.length--;
//     return returnNode;
//   }
//   size() {
//     return this.length;
//   }
//   empty() {
//     return this.length === 0 ? 1 : 0;
//   }
//   front() {
//     return this.start ? this.start.value : -1;
//   }
//   back() {
//     return this.end ? this.end.value : -1;
//   }
// }

// const solution = (input) => {
//   const answer = [];
//   const deque = new Deque();
//   for (const [command, value] of input.slice(1).map((e) => e.split(" "))) {
//     if (!!value) deque[command](value);
//     else answer.push(deque[command]());
//   }
//   console.log(answer.join("\n"));
// };

// solution(input);
