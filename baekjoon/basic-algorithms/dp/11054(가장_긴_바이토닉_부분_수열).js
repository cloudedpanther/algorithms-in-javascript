// const INPUT_1 = ["10", "1 5 2 1 4 3 4 5 2 1"]; // 7

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const seq = input[1].split(" ").map((e) => parseInt(e));
//   let dp = new Array(N);
//   let answer = 0;

//   // Functions
//   function solve() {
//     // initialize variables
//     for (let i = 0; i < N; i++) {
//       dp[i] = [0, 0];
//     }

//     // left side
//     for (let i = 0; i < N; i++) {
//       for (let j = 0; j < i; j++) {
//         if (seq[j] < seq[i]) dp[i][0] = Math.max(dp[i][0], dp[j][0] + 1);
//       }
//     }

//     // right side
//     for (let i = N - 1; i >= 0; i--) {
//       for (let j = N - 1; j > i; j--) {
//         if (seq[i] > seq[j]) dp[i][1] = Math.max(dp[i][1], dp[j][1] + 1);
//       }
//     }

//     for (let i = 0; i < N; i++) {
//       answer = Math.max(answer, dp[i][0] + dp[i][1] + 1);
//     }

//     console.log(answer);
//   }

//   // Run
//   solve();
// }

// solution(input);
