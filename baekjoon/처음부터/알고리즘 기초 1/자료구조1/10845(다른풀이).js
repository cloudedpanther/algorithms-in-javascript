// const INPUT_1 = [
//   "15",
//   "push 1",
//   "push 2",
//   "front",
//   "back",
//   "size",
//   "empty",
//   "pop",
//   "pop",
//   "pop",
//   "size",
//   "empty",
//   "pop",
//   "push 3",
//   "empty",
//   "front",
// ];

// const input = INPUT_1;

// // push X: 정수 X를 큐에 넣는 연산이다.
// // pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// // size: 큐에 들어있는 정수의 개수를 출력한다.
// // empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// // front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// // back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

// class Queue {
//   constructor() {
//     this.queue = [];
//     this.start = 0;
//     this.end = 0;
//   }
//   push(value) {
//     this.queue.push(value);
//     this.end++;
//   }
//   pop() {
//     if (this.size() === 0) return -1;
//     const returnValue = this.queue[this.start];
//     delete this.queue[this.start];
//     this.start++;
//     return returnValue;
//   }
//   size() {
//     return this.end - this.start;
//   }
//   empty() {
//     return this.size() === 0 ? 1 : 0;
//   }
//   front() {
//     return this.queue[this.start] || -1;
//   }
//   back() {
//     return this.queue[this.end - 1] || -1;
//   }
// }

// const solution = (input) => {
//   const queue = new Queue();
//   const answer = [];
//   for (const command of input.slice(1).map((e) => e.split(" "))) {
//     if (command[0] === "push") queue.push(command[1]);
//     else answer.push(queue[command[0]]());
//   }
//   console.log(answer.join("\n"));
// };

// solution(input);
