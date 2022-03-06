// const INPUT_1 = ["3 4", "AAAA", "ABCA", "AAAA"];
// const INPUT_2 = ["3 4", "AAAA", "ABCA", "AADA"];
// const INPUT_3 = ["4 4", "YYYR", "BYBY", "BBBY", "BBBY"];
// const INPUT_4 = [
//   "7 6",
//   "AAAAAB",
//   "ABBBAB",
//   "ABAAAB",
//   "ABABBB",
//   "ABAAAB",
//   "ABBBAB",
//   "AAAAAB",
// ];
// const INPUT_5 = ["2 13", "ABCDEFGHIJKLM", "NOPQRSTUVWXYZ"];

// const input = INPUT_5;

// const solution = (input) => {
//   const [N, M] = input[0].split(" ").map(Number);
//   const board = Array.from({ length: N }, (_, idx) => input[idx + 1].split(""));
//   const position = Array.from({ length: N }, () => new Array(M).fill(-1));
//   const dx = [0, 0, 1, -1];
//   const dy = [1, -1, 0, 0];

//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < M; j++) {
//       if (position[i][j] === -1) {
//         if (hasCycle(i, j, 0)) {
//           console.log("Yes");
//           return;
//         }
//       }
//     }
//   }
//   console.log("No");

//   function hasCycle(x, y, cur) {
//     position[x][y] = cur;
//     for (let k = 0; k < 4; k++) {
//       const nx = x + dx[k];
//       const ny = y + dy[k];
//       if (
//         nx >= 0 &&
//         ny >= 0 &&
//         nx < N &&
//         ny < M &&
//         board[nx][ny] === board[x][y]
//       ) {
//         if (position[nx][ny] === -1 && hasCycle(nx, ny, cur + 1)) {
//           return true;
//         } else if (Math.abs(cur - position[nx][ny]) > 2) {
//           return true;
//         }
//       }
//     }
//     return false;
//   }
// };

// solution(input);
