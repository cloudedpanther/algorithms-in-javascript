// const INPUT_1 = ["5", "YCPZY", "CYZZP", "CCPPP", "YCYZC", "CPPZZ"]; // 4
// const INPUT_2 = ["4", "PPPP", "CYZY", "CCPY", "PPCC"]; // 4

// const input = INPUT_2;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   let board = new Array(N);
//   for (let i = 0; i < N; i++) {
//     board[i] = input[i + 1].split("");
//   }

//   // Functions
//   function swap(row, col, dir) {
//     const tmp = board[row][col];
//     if (dir === "R") {
//       board[row][col] = board[row][col + 1];
//       board[row][col + 1] = tmp;
//     } else if (dir === "D") {
//       board[row][col] = board[row + 1][col];
//       board[row + 1][col] = tmp;
//     } else {
//       // ERROR
//     }
//   }

//   function countMax() {
//     let rowMax = 1;
//     let columnMax = 1;
//     let totalMax = 1;
//     for (let i = 0; i < N; i++) {
//       for (let j = 0; j < N - 1; j++) {
//         if (board[i][j] === board[i][j + 1]) rowMax++;
//         else {
//           totalMax = Math.max(totalMax, rowMax);
//           rowMax = 1;
//         }
//         if (board[j][i] === board[j + 1][i]) columnMax++;
//         else {
//           totalMax = Math.max(totalMax, columnMax);
//           columnMax = 1;
//         }
//       }
//       totalMax = Math.max(totalMax, rowMax, columnMax);
//       rowMax = 1;
//       columnMax = 1;
//     }
//     return totalMax;
//   }

//   function solve() {
//     let max = 0;
//     for (let i = 0; i < N; i++) {
//       for (let j = 0; j < N; j++) {
//         if (i < N - 1) {
//           // exchange with down side
//           swap(i, j, "D");
//           max = Math.max(max, countMax());
//           swap(i, j, "D");
//         }
//         if (j < N - 1) {
//           // exchange with right side
//           swap(i, j, "R");
//           max = Math.max(max, countMax());
//           swap(i, j, "R");
//         }
//       }
//     }
//     console.log(max);
//   }

//   // Run
//   solve();
// }

// solution(input);
