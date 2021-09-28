// const INPUT_1 = ["3", "4", "7", "10"];
// // 7
// // 44
// // 274

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const T = parseInt(input[0]);
//   let answer = "";

//   // Functions
//   function solve() {
//     for (let t = 1; t < T + 1; t++) {
//       const N = parseInt(input[t]);
//       let dp = new Array(N + 1);
//       dp[1] = 1;
//       dp[2] = 2;
//       dp[3] = 4;

//       for (let i = 4; i < N + 1; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
//       }
//       answer += dp[N];
//       if (t < T) answer += "\n";
//     }
//     console.log(answer);
//   }

//   // Run
//   solve();
// }

// solution(input);
