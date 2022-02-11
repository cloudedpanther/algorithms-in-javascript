// const INPUT_1 = ["5", "YCPZY", "CYZZP", "CCPPP", "YCYZC", "CPPZZ"];

// const input = INPUT_1;

// function checkMax(board, N) {
//   let maxCandyLine = 1;
//   let candyLine = new Array(2).fill(1);
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//       if (j === N - 1 || board[i][j] !== board[i][j + 1]) {
//         maxCandyLine = Math.max(maxCandyLine, candyLine[0]);
//         candyLine[0] = 1;
//       } else candyLine[0]++;

//       if (j === N - 1 || board[j][i] !== board[j + 1][i]) {
//         maxCandyLine = Math.max(maxCandyLine, candyLine[1]);
//         candyLine[1] = 1;
//       } else candyLine[1]++;
//     }
//   }
//   return maxCandyLine;
// }

// function swap(board, a, b, c, d) {
//   const tmp = board[a][b];
//   board[a][b] = board[c][d];
//   board[c][d] = tmp;
// }

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const board = Array.from({ length: N }, (_, idx) => input[idx + 1].split(""));
//   let answer = 1;
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//       if (j + 1 < N) {
//         swap(board, i, j, i, j + 1);
//         answer = Math.max(answer, checkMax(board, N));
//         swap(board, i, j, i, j + 1);
//       }
//       if (i + 1 < N) {
//         swap(board, i, j, i + 1, j);
//         answer = Math.max(answer, checkMax(board, N));
//         swap(board, i, j, i + 1, j);
//       }
//     }
//   }
//   console.log(answer);
// };

// solution(input);
