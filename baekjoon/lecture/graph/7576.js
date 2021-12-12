// const INPUT_1 = [
//   "6 4",
//   "1 -1 0 0 0 0",
//   "0 -1 0 0 0 0",
//   "0 0 0 0 -1 0",
//   "0 0 0 0 -1 1",
// ];
// const INPUT_2 = [
//   "6 4",
//   "0 0 0 0 0 0",
//   "0 0 0 0 0 0",
//   "0 0 0 0 0 0",
//   "0 0 0 0 0 1",
// ];
// const INPUT_3 = [
//   "6 4",
//   "0 -1 0 0 0 0",
//   "-1 0 0 0 0 0",
//   "0 0 0 0 0 0",
//   "0 0 0 0 0 1",
// ];

// const input = INPUT_3;

// // Solution
// const solution = (input) => {
//   // Variables
//   const fl = input[0].split(" ");
//   const M = Number(fl[0]);
//   const N = Number(fl[1]);
//   const dx = [-1, 1, 0, 0];
//   const dy = [0, 0, -1, 1];
//   let board = new Array(N);
//   let check = new Array(N);

//   // Functions
//   const solve = () => {
//     for (let i = 0; i < N; i++) {
//       board[i] = input[i + 1].split(" ").map(Number);
//       check[i] = new Array(M).fill(-1);
//     }

//     let queue = [];
//     for (let i = 0; i < N; i++) {
//       for (let j = 0; j < M; j++) {
//         if (board[i][j] === 1) {
//           check[i][j] = 0;
//           queue.push([i, j]);
//         }
//       }
//     }

//     while (queue.length !== 0) {
//       const x = queue[0][0];
//       const y = queue[0][1];
//       queue.splice(0, 1);
//       for (let i = 0; i < 4; i++) {
//         const nx = x + dx[i];
//         const ny = y + dy[i];
//         if (0 <= nx && nx < N && 0 <= ny && ny < M) {
//           if (board[nx][ny] === 0 && check[nx][ny] === -1) {
//             queue.push([nx, ny]);
//             check[nx][ny] = check[x][y] + 1;
//           }
//         }
//       }
//     }

//     let answer = 0;
//     for (let i = 0; i < N; i++) {
//       for (let j = 0; j < M; j++) {
//         if (board[i][j] !== -1 && check[i][j] === -1) {
//           console.log(-1);
//           return;
//         }
//         answer = Math.max(answer, check[i][j]);
//       }
//     }
//     console.log(answer);
//   };

//   // Run
//   solve();
// };

// solution(input);
