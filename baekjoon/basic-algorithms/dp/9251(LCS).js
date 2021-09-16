// // 수열 a와 b가 있다
// // a의 i번째 항으로 끝나는 공통 부분 수열 중 가장 긴 수열을 d[i][0], b에서의 그것을 [i][1]이라 한다
// // 이때 a[i] = b[j]인 j 중 가장 큰 j에 대해
// // d[i][0] = Math.max(d[0][1], d[1][1], ... , d[j - 1][1]) + 1
// // j가 존재하지 않을 경우, d[i][0] = 0

// const INPUT_1 = ["ACAYKP", "CAPCAK"];

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const seq_1 = [""].concat(input[0].split(""));
//   const seq_2 = [""].concat(input[1].split(""));
//   const LENGTH = seq_1.length;
//   let dp = new Array(LENGTH);

//   // Functions
//   function solve() {
//     // initialize variables
//     for (let i = 0; i < LENGTH; i++) {
//       dp[i] = new Array(LENGTH).fill(0);
//     }

//     // bottom-up
//     for (let i = 1; i < LENGTH; i++) {
//       for (let j = 1; j < LENGTH; j++) {
//         if (seq_1[i] === seq_2[j]) dp[i][j] = dp[i - 1][j - 1] + 1;
//         else dp[i][j] === Math.max(dp[i - 1][j], dp[i][j - 1]);
//       }
//     }

//     console.log(dp);
//   }

//   // Run
//   solve();
// }

// solution(input);
