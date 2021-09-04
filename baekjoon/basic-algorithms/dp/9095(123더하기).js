// const INPUT_1 = ["3", "4", "7", "10"]; // 7 44 274

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const T = parseInt(input[0]);
//   let dp = [];

//   // Functions
//   function solve() {
//     for (let i = 1; i < T + 1; i++) {
//       // initialize variables
//       const n = parseInt(input[i]);
//       dp = new Array(n + 1).fill(0);
//       dp[1] = 1;
//       dp[2] = 2;
//       dp[3] = 4;

//       // bottom-up approach
//       for (let j = 4; j < n + 1; j++) {
//         dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
//       }

//       console.log(dp[n]);
//     }
//   }

//   // Run
//   solve();
// }

// solution(input);
