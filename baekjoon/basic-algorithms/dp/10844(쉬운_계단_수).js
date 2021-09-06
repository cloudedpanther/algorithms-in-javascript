// const INPUT_1 = ["1"]; // 9
// const INPUT_2 = ["2"]; // 17
// const INPUT_3 = ["3"];
// const INPUT_4 = ["100"];

// const input = INPUT_4;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const DIV_NUM = 1000000000;
//   let dp = new Array(N + 1);
//   let answer = 0;

//   // Functions
//   function solve() {
//     // initialize variables
//     for (let i = 0; i < N + 1; i++) {
//       const numbers = new Array(10).fill(0);
//       dp[i] = numbers;
//     }
//     dp[1] = new Array(10).fill(1);
//     dp[1][0] = 0;

//     // bottom-up approach
//     for (let i = 1; i < N; i++) {
//       dp[i + 1][0] = dp[i][1] % DIV_NUM;
//       dp[i + 1][9] = dp[i][8] % DIV_NUM;
//       for (let j = 1; j < 9; j++) {
//         dp[i + 1][j] = (dp[i][j - 1] + dp[i][j + 1]) % DIV_NUM;
//       }
//     }

//     // answer
//     for (let i = 0; i < 10; i++) {
//       answer = (answer + dp[N][i]) % DIV_NUM;
//     }

//     console.log(answer);
//   }

//   // Run
//   solve();
// }

// solution(input);
