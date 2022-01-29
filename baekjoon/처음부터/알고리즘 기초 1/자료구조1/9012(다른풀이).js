// const INPUT_1 = [
//   "6",
//   "(())())",
//   "(((()())()",
//   "(()())((()))",
//   "((()()(()))(((())))()",
//   "()()()()(()()())()",
//   "(()((())()(",
// ];

// const input = INPUT_1;

// function isVPS(brackets) {
//   let stack = 0;
//   for (let bracket of brackets) {
//     if (bracket === "(") {
//       stack++;
//     } else {
//       if (stack <= 0) {
//         return "NO";
//       }
//       stack--;
//     }
//   }
//   return stack === 0 ? "YES" : "NO";
// }

// const solution = (input) => {
//   let answer = [];
//   for (const brackets of input.slice(1)) {
//     answer.push(isVPS(brackets));
//   }
//   console.log(answer.join("\n"));
// };

// solution(input);
