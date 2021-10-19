// const INPUT_1 = ["10", "1 5 2 1 4 3 4 5 2 1"]; // 7

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const seq = input[1].split(" ").map((e) => parseInt(e));

//   // Functions
//   function solve() {
//     let dp = new Array(N);
//     for (let i = 0; i < N; i++) {
//       dp[i] = new Array(2).fill(1);
//     }

//     // ascending sequence
//     for (let i = 1; i < N; i++) {
//       for (let j = 0; j < i; j++) {
//         const dI = N - 1 - i;
//         const dJ = N - 1 - j;
//         if (seq[j] < seq[i]) dp[i][0] = Math.max(dp[i][0], dp[j][0] + 1);
//         if (seq[dJ] < seq[dI]) dp[dI][1] = Math.max(dp[dI][1], dp[dJ][1] + 1);
//       }
//     }
//     const MAX = Math.max(...dp.map((e) => e[0] + e[1] - 1));
//     console.log(MAX);
//   }

//   // Run
//   solve();
// }

// solution(input);
