// const INPUT_1 = ["2", "6", "12"]; // 3 16

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const T = parseInt(input[0]);
//   const START = 5;
//   let dp = [];
//   let answer = "";

//   // Functions
//   function solve() {
//     for (let i = 1; i < T + 1; i++) {
//       // initialize variables
//       const N = parseInt(input[i]);
//       dp = new Array(N + 1).fill(0);
//       for (let j = 1; j < START; j++) {
//         if (j > N) break;

//         if (j <= 3) dp[j] = 1;
//         if (j > 3) dp[j] = 2;
//       }

//       // bottom-up
//       for (j = START; j < N + 1; j++) {
//         dp[j] = dp[j - 1] + dp[j - START];
//       }

//       answer += dp[N] + "\n";
//     }

//     console.log(answer.slice(0, -1));
//   }

//   // Run
//   solve();
// }

// solution(input);
