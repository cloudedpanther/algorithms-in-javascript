// const INPUT_1 = ["6", "6", "10", "13", "9", "8", "1"]; // 33

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const n = parseInt(input[0]);
//   let wine = new Array(n + 1);
//   let dp = new Array(n + 1);

//   // Functions
//   function solve() {
//     // initialize variables
//     for (let i = 0; i < n + 1; i++) {
//       dp[i] = new Array(3).fill(0);
//     }
//     for (let i = 1; i < n + 1; i++) {
//       wine[i] = parseInt(input[i]);
//     }

//     // bottom-up approach
//     for (let i = 0; i < n; i++) {
//       const value = dp[i][0];
//       dp[i + 1][0] = Math.max(value, dp[i][1] + wine[i + 1]);
//       dp[i + 1][1] = Math.max(value, dp[i][2] + wine[i + 1]);
//       dp[i + 1][2] = value;
//     }

//     console.log(dp[n][0]);
//   }

//   // Run
//   solve();
// }

// solution(input);
