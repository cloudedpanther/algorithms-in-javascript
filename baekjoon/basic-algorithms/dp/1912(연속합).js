// const INPUT_1 = ["10", "10 -4 3 1 5 6 -35 12 21 -1"]; // 33
// const INPUT_2 = ["10", "2 1 -4 3 4 -4 6 5 -5 1"]; // 14
// const INPUT_3 = ["5", "-1 -2 -3 -4 -5"]; // -1

// const input = INPUT_3;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const seq = input[1].split(" ").map((e) => parseInt(e));
//   let dp = new Array(N);

//   // Functions
//   function solve() {
//     dp[0] = seq[0];
//     for (let i = 0; i < N - 1; i++) {
//       dp[i + 1] = Math.max(dp[i] + seq[i + 1], seq[i + 1]);
//     }

//     console.log(Math.max(...dp));
//   }

//   // Run
//   solve();
// }

// solution(input);
