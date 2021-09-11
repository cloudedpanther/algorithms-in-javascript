// const INPUT_1 = ["4", "1 5 6 7"]; // 10
// const INPUT_2 = ["5", "10 9 8 7 6"]; // 50
// const INPUT_3 = ["10", "1 1 2 3 5 8 13 21 34 55"]; // 55
// const INPUT_4 = ["10", "5 10 11 12 13 30 35 40 45 47"]; // 50
// const INPUT_5 = ["4", "5 2 8 10"]; // 20
// const INPUT_6 = ["4", "3 5 15 16"]; // 18

// const input = INPUT_6;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const cards = [0].concat(input[1].split(" ").map((e) => parseInt(e)));
//   let dp = new Array(N + 1).fill(0);

//   // Functions
//   function solve() {
//     for (let i = 1; i < N + 1; i++) {
//       for (let j = 0; j < i; j++) {
//         const gap = i - j;
//         dp[i] = Math.max(dp[i], dp[j] + cards[i - j]);
//       }
//     }

//     console.log(dp[N]);
//   }

//   // Run
//   solve();
// }

// solution(input);
