// const INPUT_1 = [
//   "1 1",
//   "0",
//   "2 2",
//   "0 1",
//   "1 0",
//   "3 2",
//   "1 1 1",
//   "1 1 1",
//   "5 4",
//   "1 0 1 0 0",
//   "1 0 0 0 0",
//   "1 0 1 0 1",
//   "1 0 0 1 0",
//   "5 4",
//   "1 1 1 0 1",
//   "1 0 1 0 1",
//   "1 0 1 0 1",
//   "1 0 1 1 1",
//   "5 5",
//   "1 0 1 0 1",
//   "0 0 0 0 0",
//   "1 0 1 0 1",
//   "0 0 0 0 0",
//   "1 0 1 0 1",
//   "0 0",
// ];

// const input = INPUT_1;

// const solution = (input) => {
//   const answer = [];
//   const dx = [0, 0, -1, -1, -1, 1, 1, 1];
//   const dy = [-1, 1, -1, 0, 1, -1, 0, 1];

//   let k = 0;
//   while (k < input.length - 1) {
//     const [W, H] = input[k].split(" ").map(Number);
//     const travelMap = [];
//     for (let i = 0; i < H; i++) {
//       k += 1;
//       travelMap.push(input[k].split(" ").map(Number));
//     }
//     k += 1;
//     const visited = Array.from({ length: H }, () => new Array(W).fill(false));

//     let islands = 0;
//     for (let i = 0; i < H; i++) {
//       for (let j = 0; j < W; j++) {
//         if (travelMap[i][j] && !visited[i][j]) {
//           dfs(W, H, travelMap, visited, j, i);
//           islands++;
//         }
//       }
//     }

//     answer.push(islands);
//   }

//   console.log(answer.join("\n"));

//   function dfs(W, H, travelMap, visited, x, y) {
//     visited[y][x] = true;

//     for (let k = 0; k < 8; k++) {
//       const nx = x + dx[k];
//       const ny = y + dy[k];
//       if (
//         nx >= 0 &&
//         ny >= 0 &&
//         nx < W &&
//         ny < H &&
//         travelMap[ny][nx] &&
//         !visited[ny][nx]
//       ) {
//         dfs(W, H, travelMap, visited, nx, ny);
//       }
//     }
//   }
// };

// solution(input);
