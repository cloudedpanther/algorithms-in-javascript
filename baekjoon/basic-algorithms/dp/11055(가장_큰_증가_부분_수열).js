// const INPUT_1 = ["10", "1 100 2 50 60 3 5 6 7 8"]; // 113

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const seq = input[1].split(" ").map((e) => parseInt(e));
//   let dp = Array.from(seq);

//   // Functions
//   function solve() {
//     for (let i = 0; i < N; i++) {
//       for (let j = 0; j < i; j++) {
//         if (seq[j] < seq[i]) dp[i] = Math.max(dp[i], dp[j] + seq[i]);
//       }
//     }

//     console.log(Math.max(...dp));
//   }

//   // Run
//   solve();
// }

// solution(input);
