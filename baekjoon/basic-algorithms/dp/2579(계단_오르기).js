// const INPUT_1 = ["6", "10", "20", "15", "25", "10", "20"]; // 75
// const INPUT_2 = ["300"].concat(new Array(300).fill(10000));
// const INPUT_3 = ["1", "50"];
// const INPUT_4 = ["2", "40", "70"];

// const input = INPUT_4;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const stairs = [];
//   let dp = new Array(N);

//   // Functions
//   function solve() {
//     // initialize variables
//     for (let i = 1; i < input.length; i++) {
//       stairs.push(parseInt(input[i]));
//     }
//     for (let i = 0; i < N; i++) {
//       dp[i] = new Array(2).fill(0);
//     }
//     dp[0][0] = stairs[0];
//     if (N > 1) dp[1][0] = stairs[1];

//     // bottom-up approach
//     for (let i = 0; i < N - 1; i++) {
//       dp[i + 1][1] = dp[i][0] + stairs[i + 1];
//       if (i + 2 < N)
//         dp[i + 2][0] = Math.max(dp[i][0], dp[i][1]) + stairs[i + 2];
//     }

//     console.log(Math.max(...dp[N - 1]));
//   }

//   // Run
//   solve();
// }

// solution(input);
