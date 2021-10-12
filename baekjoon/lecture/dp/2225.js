// const INPUT_1 = ["20 2"]; // 21

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const D = 1000000000;
//   const inputLine = input[0].split(" ");
//   const N = parseInt(inputLine[0]);
//   const K = parseInt(inputLine[1]);
//   let dp = new Array(N + 1);

//   // Functions
//   function solve() {
//     for (let i = 0; i < N + 1; i++) {
//       if (i === 0) dp[i] = new Array(K + 1).fill(1);
//       else dp[i] = new Array(K + 1).fill(0);
//     }

//     for (let i = 1; i < K + 1; i++) {
//       for (let j = 1; j < N + 1; j++) {
//         for (let k = 0; k < j + 1; k++) {
//           dp[j][i] = (dp[j][i] + dp[j - k][i - 1]) % D;
//         }
//       }
//     }
//     console.log(dp[N][K]);
//   }

//   // Run
//   solve();
// }

// solution(input);
