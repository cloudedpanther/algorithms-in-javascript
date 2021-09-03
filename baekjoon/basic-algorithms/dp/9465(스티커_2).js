// // Top-Down Method fail again(Stack Size Exceeded)

// const INPUT_1 = [
//   "2",
//   "5",
//   "50 10 100 20 40",
//   "30 50 70 10 60",
//   "7",
//   "10 30 10 50 100 20 40",
//   "20 40 30 50 60 20 80",
// ];
// const INPUT_2 = ["1", "2", "50 10", "40 30"];

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const T = parseInt(input[0]);
//   let stickers = [];
//   let dp = [];
//   let lastColumn = 0;

//   // Functions
//   function fillDP() {
//     for (let i = 0; i < lastColumn - 1; i++) {
//       let value = stickers[i][0];
//       dp[i + 1][1] = Math.max(dp[i][0], dp[i][2] + stickers[i + 1][1]); // 오른쪽 위에서 스티커를 뗀 경우
//       dp[i + 1][2] = Math.max(dp[i][0], dp[i][1] + stickers[i + 1][0]); // 오른쪽 아래에서 스티커를 뗀 경우
//       dp[i + 1][0] = Math.max(dp[i + 1][1], dp[i + 1][2]); // 오른쪽에서 스티커를 떼지 않은 경우
//     }

//     return dp[lastColumn - 1][0];
//   }

//   function solve() {
//     for (let i = 1; i < T * 3 + 1; i += 3) {
//       // initialize stickers
//       const n = parseInt(input[i]);
//       const firstRow = input[i + 1].split(" ").map((e) => parseInt(e));
//       const secondRow = input[i + 2].split(" ").map((e) => parseInt(e));
//       const newStickers = [];
//       for (let j = 0; j < n; j++) {
//         newStickers.push([firstRow[j], secondRow[j]]);
//       }
//       stickers = newStickers;
//       lastColumn = n;
//       dp = new Array(n);
//       for (let i = 0; i < n; i++) {
//         dp[i] = [-1, -1, -1];
//       }
//       dp[0][0] = Math.max(stickers[0][0], stickers[0][1]);
//       dp[0][1] = stickers[0][1];
//       dp[0][2] = stickers[0][0];

//       // calculate
//       console.log(fillDP());
//     }
//   }

//   // Run
//   solve();
// }

// solution(input);
