// const INPUT_1 = ["3", "4", "7", "10"];
// // 7
// // 44
// // 274

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const T = parseInt(input.shift());
//   const MAX = Math.max(...input);
//   const D = 1000000009n;

//   // Functions
//   function solve() {
//     let answer = "";
//     let dp = new Array(MAX + 1);

//     dp[1] = 1n;
//     dp[2] = 2n;
//     dp[3] = 4n;
//     for (let i = 4; i < MAX + 1; i++) {
//       dp[i] = (((dp[i - 1] + dp[i - 2]) % D) + dp[i - 3]) % D;
//     }
//     for (let t = 0; t < T; t++) {
//       answer += dp[parseInt(input[t])];
//       if (t < T) answer += "\n";
//     }

//     console.log(answer);
//   }

//   // Run
//   solve();
// }

// solution(input);
