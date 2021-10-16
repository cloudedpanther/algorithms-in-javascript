// const INPUT_1 = ["3"]; // 220

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const D = 10007;

//   // Functions
//   function solve() {
//     let dp = new Array(N + 1);
//     for (let i = 0; i < N + 1; i++) {
//       dp[i] = new Array(10).fill(0);
//     }
//     dp[0][0] = 1;
//     for (let i = 1; i < N + 1; i++) {
//       for (let j = 0; j < 10; j++) {
//         for (k = 0; k <= j; k++) {
//           dp[i][j] = (dp[i][j] + dp[i - 1][k]) % D;
//         }
//       }
//     }
//     console.log(dp[N].reduce((a, b) => (a + b) % D));
//   }

//   // Run
//   solve();
// }

// solution(input);
