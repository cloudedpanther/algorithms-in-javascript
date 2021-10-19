// const INPUT_1 = ["6"]; // 41

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);

//   // Functions
//   function solve() {
//     if (N % 2) return 0;
//     else {
//       const K = N / 2;
//       let dp = new Array(K + 1).fill(2);
//       dp[1] = 3;
//       for (let i = 2; i < K + 1; i++) {
//         for (let j = 1; j < i - 1; j++) {
//           dp[i] += 2 * dp[j];
//         }
//         dp[i] += 3 * dp[i - 1];
//       }
//       return dp[K];
//     }
//   }

//   // Run
//   console.log(solve());
// }

// solution(input);
