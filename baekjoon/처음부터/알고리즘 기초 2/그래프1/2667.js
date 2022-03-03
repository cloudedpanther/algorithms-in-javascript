// const INPUT_1 = [
//   "7",
//   "0110100",
//   "0110101",
//   "1110101",
//   "0000111",
//   "0100000",
//   "0111110",
//   "0111000",
// ];

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const dx = [0, 0, 1, -1];
//   const dy = [1, -1, 0, 0];
//   const house = Array.from({ length: N }, (_, idx) =>
//     input[idx + 1].split("").map(Number)
//   );
//   const visited = Array.from({ length: N }, () => new Array(N).fill(false));
//   const answer = [];

//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//       if (!visited[i][j] && house[i][j]) {
//         const townSize = getTownSize(i, j);
//         answer.push(townSize);
//       }
//     }
//   }

//   console.log(answer.length);
//   console.log(answer.sort((a, b) => a - b).join("\n"));

//   function getTownSize(x, y) {
//     visited[x][y] = true;

//     let size = 1;
//     for (let k = 0; k < 4; k++) {
//       const nx = x + dx[k];
//       const ny = y + dy[k];
//       if (
//         nx >= 0 &&
//         nx < N &&
//         ny >= 0 &&
//         ny < N &&
//         house[nx][ny] &&
//         !visited[nx][ny]
//       ) {
//         size += getTownSize(nx, ny);
//       }
//     }
//     return size;
//   }
// };

// solution(input);
