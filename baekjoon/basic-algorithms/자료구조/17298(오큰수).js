// const INPUT_1 = ["4", "3 5 2 7"]; // 5 7 7 -1
// const INPUT_2 = ["4", "9 5 4 8"]; // -1 8 8 -1

// const input = INPUT_2;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const seq = input[1].split(" ").map((e) => parseInt(e));
//   const stack = [];
//   let answer = new Array(N);

//   // Functions
//   function solve() {
//     for (let i = 0; i < N; i++) {
//       const cur = seq[i];
//       while (stack.length > 0) {
//         const targetIndex = stack[stack.length - 1];
//         if (cur > seq[targetIndex]) {
//           answer[targetIndex] = cur;
//           stack.pop();
//         } else break;
//       }
//       stack.push(i);
//     }
//     while (stack.length > 0) {
//       answer[stack.pop()] = -1;
//     }
//     console.log(answer.join(" "));
//   }

//   // Run
//   solve();
// }

// solution(input);
