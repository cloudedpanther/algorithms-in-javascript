// const INPUT_1 = [
//   "3",
//   "8",
//   "0 0",
//   "7 0",
//   "100",
//   "0 0",
//   "30 50",
//   "10",
//   "1 1",
//   "1 1",
// ];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const T = Number(input[0]);
//   const dx = [-2, -2, -1, -1, 1, 1, 2, 2];
//   const dy = [-1, 1, -2, 2, -2, 2, -1, 1];
//   let l;
//   let check;

//   // Functions
//   const bfs = (s1, s2, f1, f2) => {
//     let queue = [];
//     queue.push([s1, s2]);
//     check[s1][s2] = 0;
//     while (queue.length !== 0) {
//       const x = queue[0][0];
//       const y = queue[0][1];

//       if (x === f1 && y === f2) return check[x][y];

//       queue.splice(0, 1);

//       for (let k = 0; k < 8; k++) {
//         const lx = x + dx[k];
//         const ly = y + dy[k];
//         if (0 <= lx && lx < l && 0 <= ly && ly < l) {
//           if (check[lx][ly] === -1) {
//             queue.push([lx, ly]);
//             check[lx][ly] = check[x][y] + 1;
//           }
//         }
//       }
//     }
//   };

//   const solve = () => {
//     let answer = [];
//     for (let i = 1; i < 3 * T + 1; i += 3) {
//       l = Number(input[i]);
//       check = new Array(l);
//       for (let j = 0; j < l; j++) {
//         check[j] = new Array(l).fill(-1);
//       }
//       const s = input[i + 1].split(" ").map(Number);
//       const f = input[i + 2].split(" ").map(Number);
//       const d = bfs(s[0], s[1], f[0], f[1]);
//       answer.push(d);
//     }
//     console.log(answer.join("\n"));
//   };

//   // Run
//   solve();
// };

// solution(input);
