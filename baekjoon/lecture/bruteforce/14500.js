// const INPUT_1 = [
//   "5 5",
//   "1 2 3 4 5",
//   "5 4 3 2 1",
//   "2 3 4 5 6",
//   "6 5 4 3 2",
//   "1 2 1 2 1",
// ]; // 19

// const INPUT_2 = [
//   "4 10",
//   "1 2 1 2 1 2 1 2 1 2",
//   "2 1 2 1 2 1 2 1 2 1",
//   "1 2 1 2 1 2 1 2 1 2",
//   "2 1 2 1 2 1 2 1 2 1",
// ];

// const INPUT_3 = ["4 5", "1 2 3 4 5", "1 2 3 4 5", "1 2 3 4 5", "1 2 3 4 5"];

// const input = INPUT_3;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0].split(" ")[0]);
//   const M = parseInt(input[0].split(" ")[1]);
//   const board = new Array(N);
//   for (let i = 0; i < N; i++) {
//     board[i] = input[i + 1].split(" ").map(Number);
//   }

//   // Functions
//   function solve() {
//     let answer = 0;
//     for (let i = 0; i < N; i++) {
//       for (let j = 0; j < M; j++) {
//         // 일자형 가로
//         if (j + 3 < M) {
//           const tmp =
//             board[i][j] + board[i][j + 1] + board[i][j + 2] + board[i][j + 3];
//           answer = Math.max(answer, tmp);
//         }
//         // 일자형 세로
//         if (i + 3 < N) {
//           const tmp =
//             board[i][j] + board[i + 1][j] + board[i + 2][j] + board[i + 3][j];
//           answer = Math.max(answer, tmp);
//         }
//         // 네모형
//         if (i + 1 < N && j + 1 < M) {
//           const tmp =
//             board[i][j] +
//             board[i + 1][j] +
//             board[i][j + 1] +
//             board[i + 1][j + 1];
//           answer = Math.max(answer, tmp);
//         }
//         // 낫형 가로
//         if (j + 2 < M) {
//           // 위로 꺾인형
//           if (i - 1 >= 0) {
//             const tmp1 =
//               board[i][j] +
//               board[i][j + 1] +
//               board[i][j + 2] +
//               board[i - 1][j + 2];
//             const tmp2 =
//               board[i][j] + board[i][j + 1] + board[i][j + 2] + board[i - 1][j];
//             answer = Math.max(answer, tmp1, tmp2);
//           }
//           // 아래로 꺾인형
//           if (i + 1 < N) {
//             const tmp1 =
//               board[i][j] +
//               board[i][j + 1] +
//               board[i][j + 2] +
//               board[i + 1][j + 2];
//             const tmp2 =
//               board[i][j] + board[i][j + 1] + board[i][j + 2] + board[i + 1][j];
//             answer = Math.max(answer, tmp1, tmp2);
//           }
//         }
//         // 낫형 세로
//         if (i + 2 < N) {
//           // 왼쪽으로 꺾인형
//           if (j - 1 >= 0) {
//             const tmp1 =
//               board[i][j] +
//               board[i + 1][j] +
//               board[i + 2][j] +
//               board[i + 2][j - 1];
//             const tmp2 =
//               board[i][j] + board[i + 1][j] + board[i + 2][j] + board[i][j - 1];
//             answer = Math.max(answer, tmp1, tmp2);
//           }
//           // 오른쪽으로 꺾인형
//           if (j + 1 < M) {
//             const tmp1 =
//               board[i][j] +
//               board[i + 1][j] +
//               board[i + 2][j] +
//               board[i + 2][j + 1];
//             const tmp2 =
//               board[i][j] + board[i + 1][j] + board[i + 2][j] + board[i][j + 1];
//             answer = Math.max(answer, tmp1, tmp2);
//           }
//         }
//         // 번개형 세로
//         if (i - 1 >= 0 && i + 1 < N && j + 1 < M) {
//           const tmp1 =
//             board[i][j] +
//             board[i - 1][j] +
//             board[i][j + 1] +
//             board[i + 1][j + 1];
//           const tmp2 =
//             board[i][j] +
//             board[i - 1][j + 1] +
//             board[i][j + 1] +
//             board[i + 1][j];
//           answer = Math.max(answer, tmp1, tmp2);
//         }
//         // 번개형 가로
//         if (j - 1 >= 0 && j + 1 < M && i + 1 < N) {
//           const tmp1 =
//             board[i][j] +
//             board[i + 1][j] +
//             board[i][j - 1] +
//             board[i + 1][j + 1];
//           const tmp2 =
//             board[i][j] +
//             board[i + 1][j] +
//             board[i][j + 1] +
//             board[i + 1][j - 1];
//           answer = Math.max(answer, tmp1, tmp2);
//         }
//         // 오리발형 가로
//         if (j + 2 < M) {
//           // 위로 솟은형
//           if (i - 1 >= 0) {
//             const tmp =
//               board[i][j] +
//               board[i][j + 1] +
//               board[i][j + 2] +
//               board[i - 1][j + 1];
//             answer = Math.max(answer, tmp);
//           }
//           // 아래로 솟은형
//           if (i + 1 < N) {
//             const tmp =
//               board[i][j] +
//               board[i][j + 1] +
//               board[i][j + 2] +
//               board[i + 1][j + 1];
//             answer = Math.max(answer, tmp);
//           }
//         }
//         // 오리발형 가로
//         if (i + 2 < N) {
//           // 왼쪽으로 솟은형
//           if (j - 1 >= 0) {
//             const tmp =
//               board[i][j] +
//               board[i + 1][j] +
//               board[i + 2][j] +
//               board[i + 1][j - 1];
//             answer = Math.max(answer, tmp);
//           }
//           // 오른쪽으로 솟은형
//           if (j + 1 < M) {
//             const tmp =
//               board[i][j] +
//               board[i + 1][j] +
//               board[i + 2][j] +
//               board[i + 1][j + 1];
//             answer = Math.max(answer, tmp);
//           }
//         }
//       }
//     }
//     console.log(answer);
//   }

//   // Run
//   solve();
// }

// solution(input);
