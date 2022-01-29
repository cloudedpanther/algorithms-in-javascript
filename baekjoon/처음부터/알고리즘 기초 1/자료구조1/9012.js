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

// const solution = (input) => {
//   let answer = [];
//   for (const brackets of input.slice(1)) {
//     let stack = 0;
//     for (const bracket of brackets.split("")) {
//       if (bracket === "(") {
//         stack++;
//       } else {
//         stack--;
//       }
//       if (stack < 0) break;
//     }
//     answer.push(stack === 0 ? "YES" : "NO");
//   }
//   console.log(answer.join("\n"));
// };

// solution(input);
