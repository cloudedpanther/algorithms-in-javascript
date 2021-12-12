// const INPUT_1 = ["4 6", "101111", "101010", "101011", "111011"];
// const INPUT_2 = ["4 6", "110110", "110110", "111111", "111101"];
// const INPUT_3 = [
//   "2 25",
//   "1011101110111011101110111",
//   "1110111011101110111011101",
// ];

// const input = INPUT_3;

// // Solution
// const solution = (input) => {
//   // Variables
//   const fl = input[0].split(" ");
//   const N = Number(fl[0]);
//   const M = Number(fl[1]);
//   let board = new Array(N);
//   let check = new Array(N);

//   // Functions
//   const bfs = () => {
//     let queue = [];
//     queue.push([0, 0, 1]);
//     check[0][0] = 1;
//     while (queue.length !== 0) {
//       const location = queue[0];
//       const i = location[0];
//       const j = location[1];
//       const cnt = location[2];

//       if (i === N - 1 && j === M - 1) return cnt;

//       queue.splice(0, 1);
//       if (i > 0 && board[i - 1][j] && !check[i - 1][j]) {
//         queue.push([i - 1, j, cnt + 1]);
//         check[i - 1][j] = 1;
//       }
//       if (i < N - 1 && board[i + 1][j] && !check[i + 1][j]) {
//         queue.push([i + 1, j, cnt + 1]);
//         check[i + 1][j] = 1;
//       }
//       if (j > 0 && board[i][j - 1] && !check[i][j - 1]) {
//         queue.push([i, j - 1, cnt + 1]);
//         check[i][j - 1] = 1;
//       }
//       if (j < M - 1 && board[i][j + 1] && !check[i][j + 1]) {
//         queue.push([i, j + 1, cnt + 1]);
//         check[i][j + 1] = 1;
//       }
//     }
//   };

//   const solve = () => {
//     for (let i = 0; i < N; i++) {
//       board[i] = input[i + 1].split("").map(Number);
//       check[i] = new Array(M).fill(0);
//     }
//     const answer = bfs();
//     console.log(answer);
//   };

//   // Run
//   solve();
// };

// solution(input);
