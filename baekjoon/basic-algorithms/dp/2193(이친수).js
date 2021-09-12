// const INPUT_1 = ["90"]; // 2

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   let dp = new Array(N + 1);
//   let answer = 0;

//   // Functions
//   function solve() {
//     // initialize variables
//     for (let i = 1; i < N + 1; i++) {
//       dp[i] = new Array(2).fill(BigInt(0));
//     }
//     dp[1][1] = BigInt(1);

//     // 0으로 끝나는 수: 이전에 0이나 1로 끝났던 수
//     // 1로 끝나는 수: 이전에 0으로 끝났던 수
//     for (let i = 1; i < N; i++) {
//       dp[i + 1][0] = dp[i][0] + dp[i][1];
//       dp[i + 1][1] = dp[i][0];
//     }

//     answer = dp[N][0] + dp[N][1];
//     console.log(String(answer));
//   }

//   // Run
//   solve();
// }

// solution(input);
