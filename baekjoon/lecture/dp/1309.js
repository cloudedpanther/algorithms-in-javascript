// const INPUT_1 = ["4"]; // 41

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const D = 9901;

//   // Functions
//   function solve() {
//     let dp = new Array(N + 1);
//     dp[0] = [1, 0, 0];
//     for (let i = 1; i < N + 1; i++) {
//       dp[i] = new Array(3);
//     }
//     for (let i = 1; i < N + 1; i++) {
//       const none = dp[i - 1][0];
//       const first = dp[i - 1][1];
//       const second = dp[i - 1][2];
//       dp[i][1] = (none + second) % D;
//       dp[i][2] = (none + first) % D;
//       dp[i][0] = (dp[i][2] + second) % D;
//     }
//     const final = dp[N].reduce((a, b) => (a + b) % D);
//     console.log(final);
//   }

//   // Run
//   solve();
// }

// solution(input);
