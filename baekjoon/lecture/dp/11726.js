// const INPUT_1 = ["2"]; // 2
// const INPUT_2 = ["9"]; // 55

// const input = INPUT_2;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   let dp = new Array(N + 1);

//   // Functions
//   function solve() {
//     dp[1] = 1;
//     dp[2] = 2;
//     for (let i = 3; i < N + 1; i++) {
//       dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
//     }
//     console.log(dp[N]);
//   }

//   // Run
//   solve();
// }

// solution(input);
