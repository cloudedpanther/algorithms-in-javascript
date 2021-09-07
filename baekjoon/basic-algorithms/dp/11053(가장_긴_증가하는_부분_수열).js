// const INPUT_1 = ["6", "10 20 10 30 20 50"];
// const INPUT_2 = ["5", "10 30 40 20 50"];
// const INPUT_3 = ["5", "10 40 20 30 50"];

// const input = INPUT_2;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const A = input[1].split(" ").map((e) => parseInt(e));
//   let dp = new Array(N).fill(1);

//   // Functions
//   function solve() {
//     for (let i = 0; i < N; i++) {
//       for (let j = 0; j < i; j++) {
//         if (A[j] < A[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }

//     console.log(Math.max(...dp));
//   }

//   // Run
//   solve();
// }

// solution(input);
