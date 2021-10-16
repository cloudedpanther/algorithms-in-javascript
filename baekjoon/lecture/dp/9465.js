// const INPUT_1 = [
//   "2",
//   "5",
//   "50 10 100 20 40",
//   "30 50 70 10 60",
//   "7",
//   "10 30 10 50 100 20 40",
//   "20 40 30 50 60 20 80",
// ];
// // 260
// // 290

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const T = parseInt(input[0]);
//   let answer = "";

//   // Functions
//   function solve() {
//     for (let t = 0; t < T; t++) {
//       const index = 3 * t + 1;
//       const N = parseInt(input[index]);
//       const top = [0].concat(
//         input[index + 1].split(" ").map((e) => parseInt(e))
//       );
//       const bottom = [0].concat(
//         input[index + 2].split(" ").map((e) => parseInt(e))
//       );
//       let dp = new Array(N + 1);
//       for (let d = 0; d < N + 1; d++) {
//         dp[d] = new Array(3).fill(0);
//       }

//       for (let i = 1; i < N + 1; i++) {
//         dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]);
//         dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][2]) + top[i];
//         dp[i][2] = Math.max(dp[i - 1][0], dp[i - 1][1]) + bottom[i];
//       }
//       answer += Math.max(...dp[N]);
//       if (t < T - 1) answer += "\n";
//     }
//     console.log(answer);
//   }

//   // Run
//   solve();
// }

// solution(input);
