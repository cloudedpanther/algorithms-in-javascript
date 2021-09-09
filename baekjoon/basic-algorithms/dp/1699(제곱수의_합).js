// const INPUT_1 = ["7"]; // 4

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const MAX = Math.floor(Math.sqrt(N)) + 1;
//   let pow = new Array(MAX).fill(0);
//   let dp = new Array(N + 1);

//   // Functions
//   function solve() {
//     // initialize variables
//     for (let i = 1; i < MAX; i++) {
//       pow[i] = Math.pow(i, 2);
//     }
//     for (let i = 0; i < N + 1; i++) {
//       dp[i] = i;
//     }

//     // bottom-up
//     for (let i = 1; i < N + 1; i++) {
//       for (let j = 1; pow[j] <= i; j++) {
//         dp[i] = Math.min(dp[i], dp[i - pow[j]] + 1);
//       }
//     }

//     console.log(dp[N]);
//   }

//   // Run
//   solve();
// }

// solution(input);
