// const INPUT_1 = ["6", "6", "10", "13", "9", "8", "1"]; // 33

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const wines = input.map((e) => parseInt(e));
//   const N = wines[0];

//   // Functions
//   function solve() {
//     let dp = new Array(N + 1);
//     for (d = 0; d < N + 1; d++) {
//       dp[d] = new Array(3).fill(0);
//     }

//     for (let i = 1; i < N + 1; i++) {
//       dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]);
//       dp[i][1] = dp[i - 1][0] + wines[i];
//       if (dp[i - 1][1]) dp[i][2] = dp[i - 1][1] + wines[i];
//     }
//     console.log(Math.max(...dp[N]));
//   }

//   // Run
//   solve();
// }

// solution(input);
