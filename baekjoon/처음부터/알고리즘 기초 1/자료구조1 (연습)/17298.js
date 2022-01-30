// const INPUT_1 = ["4", "3 5 2 7"];
// const INPUT_2 = ["4", "9 5 4 8"];

// const input = INPUT_2;

// const solution = (input) => {
//   const stack = [];
//   const answer = [];
//   for (const num of input[1].split(" ").map(Number).reverse()) {
//     while (stack.length > 0) {
//       const top = stack[stack.length - 1];
//       if (top > num) {
//         answer.push(top);
//         break;
//       }
//       stack.pop();
//     }
//     if (stack.length === 0) answer.push(-1);
//     stack.push(num);
//   }
//   console.log(answer.reverse().join(" "));
// };

// solution(input);
