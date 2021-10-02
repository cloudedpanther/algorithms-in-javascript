// const INPUT_1 = ["1"]; // 9
// const INPUT_2 = ["2"]; // 17

// const input = INPUT_2;

// // Solution
// function solution(input) {
//   // Variables
//   const D = 1000000000;
//   const N = parseInt(input[0]);
//   let dp = new Array(N + 1); // dp[i][j]: i 자리 계단 수 중 j로 끝나는 수

//   // Functions
//   function solve() {
//     let answer = 0;

//     for (let i = 0; i < N + 1; i++) {
//       dp[i] = new Array(10).fill(0);
//     }
//     for (let i = 1; i < 10; i++) {
//       dp[1][i] = 1;
//     }

//     for (let i = 2; i < N + 1; i++) {
//       for (let j = 0; j < 10; j++) {
//         if (j === 0) dp[i][j] = dp[i - 1][j + 1];
//         else if (j === 9) dp[i][j] = dp[i - 1][j - 1];
//         else dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % D;
//       }
//     }

//     for (let i = 0; i < 10; i++) {
//       answer = (answer + dp[N][i]) % D;
//     }
//     console.log(answer);
//   }

//   // Run
//   solve();
// }

// solution(input);
