// const INPUT_1 = ["6", "10 30 10 20 20 10"]; // 3

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const seq = input[1].split(" ").map((e) => parseInt(e));

//   // Functions
//   function solve() {
//     let dp = new Array(N).fill(1);
//     for (let i = 1; i < N; i++) {
//       for (let j = 0; j < i; j++) {
//         if (seq[j] > seq[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//     console.log(Math.max(...dp));
//   }

//   // Run
//   solve();
// }

// solution(input);
