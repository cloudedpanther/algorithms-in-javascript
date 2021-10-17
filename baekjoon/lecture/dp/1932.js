// const INPUT_1 = ["5", "7", "3 8", "8 1 0", "2 7 4 4", "4 5 2 6 5"]; // 30

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   let tri = new Array(N + 1);
//   for (let t = 1; t < N + 1; t++) {
//     tri[t] = [0].concat(input[t].split(" ").map((e) => parseInt(e)));
//   }

//   // Functions
//   function solve() {
//     let dp = new Array(N + 1);
//     for (let i = 0; i < N + 1; i++) {
//       dp[i] = new Array(i + 1).fill(0);
//     }
//     for (let i = 1; i < N + 1; i++) {
//       for (let j = 1; j < i + 1; j++) {
//         const prev1 = dp[i - 1][j - 1];
//         const prev2 = j < i ? dp[i - 1][j] : 0;
//         dp[i][j] = Math.max(prev1, prev2) + tri[i][j];
//       }
//     }
//     console.log(Math.max(...dp[N]));
//   }

//   // Run
//   solve();
// }

// solution(input);
