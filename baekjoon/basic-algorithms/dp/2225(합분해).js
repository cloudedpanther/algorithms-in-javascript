// const INPUT_1 = ["20 2"]; // 21

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0].split(" ")[0]);
//   const K = parseInt(input[0].split(" ")[1]);
//   const DIVS = 1000000000;
//   let dp = new Array(N + 1);

//   // Functions
//   function solve() {
//     // initialize variables
//     for (i = 0; i < N + 1; i++) {
//       dp[i] = new Array(K + 1).fill(0);
//       dp[i][1] = 1;
//     }

//     // bottom-up
//     for (i = 2; i < K + 1; i++) {
//       for (j = 0; j < N + 1; j++) {
//         for (let h = 0; h < j + 1; h++) {
//           dp[j][i] = (dp[j][i] + (dp[h][i - 1] % DIVS)) % DIVS;
//         }
//       }
//     }

//     console.log(dp[N][K]);
//   }

//   // Run
//   solve();
// }

// solution(input);
