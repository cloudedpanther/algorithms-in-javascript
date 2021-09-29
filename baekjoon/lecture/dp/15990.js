// const INPUT_1 = ["3", "4", "7", "10"];
// // 3
// // 9
// // 27

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const MAX = 100000;
//   const T = parseInt(input[0]);
//   const D = 1000000009;
//   let dp = new Array(MAX + 1);
//   let answer = "";

//   // Functions
//   function solve() {
//     // init dp
//     for (let i = 0; i < dp.length; i++) {
//       dp[i] = new Array(4).fill(0);
//     }
//     for (let i = 1; i < dp.length; i++) {
//       const queue = [1, 2, 3];
//       for (let j = 1; j <= 3; j++) {
//         queue.push(queue.shift());
//         if (i - j > 0)
//           dp[i][j] = (dp[i - j][queue[0]] + dp[i - j][queue[1]]) % D;
//         else if (i === j) dp[i][j] = 1;
//       }

//       //   if (i - 1 > 0) dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % D;
//       //   else if (i === 1) dp[i][1] = 1;
//       //   if (i - 2 > 0) dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % D;
//       //   else if (i === 2) dp[i][2] = 1;
//       //   if (i - 3 > 0) dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % D;
//       //   else if (i === 3) dp[i][3] = 1;
//     }

//     // print each cases
//     for (let t = 1; t < T + 1; t++) {
//       const N = parseInt(input[t]);
//       answer += (((dp[N][1] + dp[N][2]) % D) + dp[N][3]) % D;
//       if (t < T) answer += "\n";
//     }
//     console.log(answer);
//   }

//   // Run
//   solve();
// }

// solution(input);
