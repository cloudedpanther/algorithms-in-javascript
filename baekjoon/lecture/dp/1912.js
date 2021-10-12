// const INPUT_1 = ["10", "10 -4 3 1 5 6 -35 12 21 -1"]; // 33

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const seq = input[1].split(" ").map((e) => parseInt(e));
//   let dp = new Array(N);
//   // dp[i] = i번 째 항을 마지막으로 연속한 수를 더해서 얻을 수 있는 합의 최댓값

//   // Functions
//   function solve() {
//     dp[0] = seq[0];
//     for (let i = 1; i < N; i++) {
//       dp[i] = Math.max(seq[i], dp[i - 1] + seq[i]);
//     }
//     console.log(Math.max(...dp));
//   }

//   // Run
//   solve();
// }

// solution(input);
