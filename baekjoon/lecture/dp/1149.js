// const INPUT_1 = ["3", "26 40 83", "49 60 57", "13 89 99"]; // 96

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);

//   // Functions
//   function solve() {
//     let dp = new Array(N + 1);
//     for (let i = 0; i < N + 1; i++) {
//       dp[i] = new Array(3).fill(0);
//     }

//     for (let i = 1; i < N + 1; i++) {
//       const RGB = input[i].split(" ").map((e) => parseInt(e));
//       const queue = [0, 1, 2];
//       for (let j = 0; j < 3; j++) {
//         const cur = queue.shift();
//         dp[i][cur] =
//           Math.min(dp[i - 1][queue[0]], dp[i - 1][queue[1]]) + RGB[cur];
//         queue.push(cur);
//       }
//     }
//     console.log(Math.min(...dp[N]));
//   }

//   // Run
//   solve();
// }

// solution(input);
