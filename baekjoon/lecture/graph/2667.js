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

// // Solution
// const solution = (input) => {
//   // Variables
//   const N = Number(input[0]);
//   let matrix = new Array(N);
//   for (let i = 0; i < N; i++) {
//     matrix[i] = input[i + 1].split("").map(Number);
//   }
//   let check = new Array(N);
//   for (let i = 0; i < N; i++) {
//     check[i] = new Array(N).fill(0);
//   }

//   // Functions
//   const dfs = (i, j) => {
//     let house = 1;
//     check[i][j] = 1;
//     if (i > 0 && !check[i - 1][j] && matrix[i - 1][j]) house += dfs(i - 1, j);
//     if (i < N - 1 && !check[i + 1][j] && matrix[i + 1][j])
//       house += dfs(i + 1, j);
//     if (j > 0 && !check[i][j - 1] && matrix[i][j - 1]) house += dfs(i, j - 1);
//     if (j < N - 1 && !check[i][j + 1] && matrix[i][j + 1])
//       house += dfs(i, j + 1);
//     return house;
//   };

//   const solve = () => {
//     let villages = 0;
//     let houses = [];
//     for (let i = 0; i < N; i++) {
//       for (let j = 0; j < N; j++) {
//         if (!check[i][j] && matrix[i][j]) {
//           houses.push(dfs(i, j));
//           villages++;
//         }
//       }
//     }
//     console.log(villages);
//     console.log(houses.sort((a, b) => a - b).join("\n"));
//   };

//   // Run
//   solve();
// };

// solution(input);
