// const INPUT_1 = ["2"]; // 3
// const INPUT_2 = ["8"]; // 171
// const INPUT_3 = ["12"]; // 2731

// const input = INPUT_3;

// // Solution
// function solution(input) {
//   // Variables
//   const n = parseInt(input[0]);
//   const DIV_NUM = 10007;
//   let dp = new Array(n + 1).fill(0);

//   // Functions
//   function solve() {
//     // initialize variables
//     dp[1] = 1;
//     dp[2] = 3;

//     // bottom-up approach
//     for (let i = 1; i < n - 1; i++) {
//       dp[i + 2] = (dp[i + 1] + dp[i] + dp[i]) % DIV_NUM;
//     }

//     console.log(dp[n]);
//   }

//   // Run
//   solve();
// }

// solution(input);
