// const INPUT_1 = ["4 7", "6 13", "4 8", "3 6", "5 12"]; // 14

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0].split(" ")[0]); // 물건의 개수
//   const K = parseInt(input[0].split(" ")[1]); // 무게 한도
//   let W = new Array(N + 1).fill(0); // 각 물건의 무게
//   let V = new Array(N + 1).fill(0); // 각 물건의 가치
//   let dp = new Array(K + 1).fill(0);

//   // Functions
//   function solve() {
//     // initialize variables
//     for (let i = 0; i < K + 1; i++) {
//       dp[i] = new Array(N + 1).fill(0);
//     }
//     for (let i = 1; i < N + 1; i++) {
//       const curr = input[i].split(" ");
//       W[i] = parseInt(curr[0]);
//       V[i] = parseInt(curr[1]);
//     }

//     // bottom-up
//     for (let i = 1; i < K + 1; i++) {
//       for (let j = 1; j < N + 1; j++) {
//         if (i < W[j]) dp[i][j] = dp[i][j - 1];
//         else dp[i][j] = Math.max(dp[i][j - 1], dp[i - W[j]][j - 1] + V[j]);
//       }
//     }

//     console.log(dp[K][N]);
//   }

//   // Run
//   solve();
// }

// solution(input);
