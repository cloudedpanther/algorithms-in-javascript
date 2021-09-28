// const INPUT_1 = ["2"]; // 1
// const INPUT_2 = ["10"]; // 3

// const input = INPUT_2;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   let dp = new Array(N + 1).fill(0);

//   // Functions
//   function solve() {
//     for (let i = 2; i < N + 1; i++) {
//       dp[i] = dp[i - 1] + 1;
//       if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
//       if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
//     }
//     console.log(dp[N]);
//   }

//   // Run
//   solve();
// }

// solution(input);
