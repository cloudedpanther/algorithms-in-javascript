// const INPUT_1 = ["6", "10 20 10 30 20 50"];
// // 4
// // 10 20 30 50

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const seq = input[1].split(" ").map((e) => parseInt(e));
//   let dp = new Array(N);

//   // Functions
//   function solve() {
//     for (let i = 0; i < N; i++) {
//       dp[i] = [1, -1];
//     }

//     for (let i = 1; i < N; i++) {
//       for (let j = 0; j < i; j++) {
//         if (seq[j] < seq[i] && dp[i][0] < dp[j][0] + 1) {
//           dp[i][0] = dp[j][0] + 1;
//           dp[i][1] = j;
//         }
//       }
//     }

//     const maxValue = Math.max(...dp.map((e) => e[0]));
//     const maxValueIndex = dp.findIndex((e) => e[0] === maxValue);
//     const stack = [];
//     let seqValue = seq[maxValueIndex];
//     let nextIndex = dp[maxValueIndex][1];

//     while (1) {
//       stack.push(seqValue);
//       if (nextIndex === -1) break;

//       seqValue = seq[nextIndex];
//       nextIndex = dp[nextIndex][1];
//     }

//     let answer = "";
//     while (stack.length !== 0) {
//       answer += stack.pop();
//       if (stack.length !== 0) answer += " ";
//     }
//     console.log(maxValue);
//     console.log(answer);
//   }

//   // Run
//   solve();
// }

// solution(input);
