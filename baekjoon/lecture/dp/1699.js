// const INPUT_1 = ["11"]; // 3

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   let dp = new Array(N + 1);

//   // Functions
//   function solve() {
//     for (let i = 0; i < N + 1; i++) {
//       dp[i] = i;
//     }

//     for (let i = 1; i < N + 1; i++) {
//       for (let j = 1; Math.pow(j, 2) <= i; j++) {
//         dp[i] = Math.min(dp[i], dp[i - Math.pow(j, 2)] + 1);
//       }
//     }

//     console.log(dp[N]);
//   }

//   // Run
//   solve();
// }

// solution(input);
