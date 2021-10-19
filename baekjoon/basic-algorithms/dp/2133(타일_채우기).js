// const INPUT_1 = ["2"]; // 3
// const INPUT_2 = ["4"]; // 9
// const INPUT_3 = ["1"]; // 0
// const INPUT_4 = ["10"];

// const input = INPUT_4;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   let dp = new Array(N + 1).fill(0);

//   // Functions
//   function solve() {
//     // no odd numbers
//     if (N % 2 !== 0) {
//       console.log(0);
//       return;
//     }

//     // initialize variables
//     if (N > 1) dp[2] = 3;

//     // bottom-up
//     for (let i = 4; i < N + 1; i += 2) {
//       dp[i] += dp[i - 2] * dp[2];
//       for (let j = 4; j < i; j += 2) {
//         dp[i] += dp[i - j] * 2;
//       }
//       dp[i] += 2;
//     }

//     console.log(dp);
//   }

//   // Run
//   solve();
// }

// solution(input);
