// const INPUT_1 = ["1"]; // 10
// const INPUT_2 = ["2"]; // 55
// const INPUT_3 = ["3"]; // 220

// const input = INPUT_2;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const DIV_NUM = 10007;
//   let dp = new Array(N + 1);
//   let answer = 0;

//   // Functions
//   function solve() {
//     // initialize variables
//     dp[1] = new Array(10).fill(1);
//     for (let i = 2; i < N + 1; i++) {
//       dp[i] = new Array(10).fill(0);
//       dp[i][0] = 1;
//     }

//     // bottom-up approach
//     for (let i = 1; i < N; i++) {
//       for (let j = 0; j < 9; j++) {
//         dp[i + 1][j + 1] = (dp[i + 1][j] + dp[i][j + 1]) % DIV_NUM;
//       }
//     }

//     for (let i = 0; i < 10; i++) {
//       answer = (answer + dp[N][i]) % DIV_NUM;
//     }

//     console.log(answer);
//   }

//   // Run
//   solve();
// }

// solution(input);
