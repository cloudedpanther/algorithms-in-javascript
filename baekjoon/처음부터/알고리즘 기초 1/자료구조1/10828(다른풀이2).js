// const INPUT_1 = [
//   "14",
//   "push 1",
//   "push 2",
//   "top",
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
//   "top",
// ];

// const input = INPUT_1;

// // push X: 정수 X를 스택에 넣는 연산이다.
// // pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// // size: 스택에 들어있는 정수의 개수를 출력한다.
// // empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
// // top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

// class Stack {
//   constructor() {
//     this.stack = [];
//   }
//   push(value) {
//     this.stack.push(value);
//   }
//   pop() {
//     return this.stack.pop() || -1;
//   }
//   size() {
//     return this.stack.length;
//   }
//   empty() {
//     return this.stack.length === 0 ? 1 : 0;
//   }
//   top() {
//     return this.stack[this.stack.length - 1] || -1;
//   }
// }

// const solution = (input) => {
//   let answer = [];
//   const stack = new Stack();
//   for (const command of input.slice(1).map((e) => e.split(" "))) {
//     if (command.length > 1) stack[command[0]](command[1]);
//     else answer.push(stack[command[0]]());
//   }
//   console.log(answer.join("\n"));
// };

// solution(input);
