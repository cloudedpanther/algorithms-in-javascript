// const INPUT_1 = ["3"]; // 2

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   let dp = new Array(N + 1);

//   // Functions
//   function solve() {
//     dp[0] = 0n;
//     dp[1] = 1n;

//     for (let i = 2; i < N + 1; i++) {
//       dp[i] = dp[i - 1] + dp[i - 2];
//     }

//     console.log(String(dp[N]));
//   }

//   // Run
//   solve();
// }

// solution(input);
