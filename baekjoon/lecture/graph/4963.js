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

// // Solution
// const solution = (input) => {
//   // Variables
//   let matrix, check;
//   let h, w;

//   // Functions
//   const dfs = (i, j) => {
//     check[i][j] = 1;
//     if (i > 0) {
//       if (!check[i - 1][j] && matrix[i - 1][j]) dfs(i - 1, j);
//       if (j > 0 && !check[i - 1][j - 1] && matrix[i - 1][j - 1])
//         dfs(i - 1, j - 1);
//       if (j < w - 1 && !check[i - 1][j + 1] && matrix[i - 1][j + 1])
//         dfs(i - 1, j + 1);
//     }
//     if (i < h - 1) {
//       if (!check[i + 1][j] && matrix[i + 1][j]) dfs(i + 1, j);
//       if (j > 0 && !check[i + 1][j - 1] && matrix[i + 1][j - 1])
//         dfs(i + 1, j - 1);
//       if (j < w - 1 && !check[i + 1][j + 1] && matrix[i + 1][j + 1])
//         dfs(i + 1, j + 1);
//     }
//     if (j > 0 && !check[i][j - 1] && matrix[i][j - 1]) dfs(i, j - 1);
//     if (j < w - 1 && !check[i][j + 1] && matrix[i][j + 1]) dfs(i, j + 1);
//   };

//   const solve = () => {
//     let answer = [];
//     let c = 0;
//     while (c < input.length) {
//       const fl = input[c].split(" ");
//       w = Number(fl[0]);
//       h = Number(fl[1]);
//       if (w === 0 && h === 0) break;

//       matrix = new Array(h);
//       check = new Array(h);
//       for (let i = 0; i < h; i++) {
//         matrix[i] = input[c + i + 1].split(" ").map(Number);
//         check[i] = new Array(w).fill(0);
//       }
//       c += h + 1;
//       let islands = 0;
//       for (let i = 0; i < h; i++) {
//         for (let j = 0; j < w; j++) {
//           if (!check[i][j] && matrix[i][j]) {
//             dfs(i, j);
//             islands++;
//           }
//         }
//       }
//       answer.push(islands);
//     }
//     console.log(answer.join("\n"));
//   };

//   // Run
//   solve();
// };

// solution(input);
