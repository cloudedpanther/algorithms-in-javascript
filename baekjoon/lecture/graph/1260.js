// const INPUT_1 = ["4 5 1", "1 2", "1 3", "1 4", "2 4", "3 4"];
// const INPUT_2 = ["5 5 3", "5 4", "5 2", "1 2", "3 4", "3 1"];
// const INPUT_3 = ["1000 1 1000", "999 1000"];
// const INPUT_4 = ["1000 2 1000", "999 1000", "1 2"];

// const input = INPUT_4;

// // Solution
// const solution = (input) => {
//   // Variables
//   const fl = input[0].split(" ").map(Number);
//   const N = fl[0];
//   const M = fl[1];
//   const V = fl[2];
//   let list = new Array(N + 1);
//   const stack = [];
//   let check = new Array(N + 1).fill(false);
//   const dfsAnswer = [];
//   const bfsAnswer = [];
//   let totalAnswer = "";

//   // Functions
//   const dfs = (index) => {
//     stack.push(index);
//     check[index] = true;
//     dfsAnswer.push(index);
//     for (let i = 0; i < list[index].length; i++) {
//       const next = list[index][i];
//       if (!check[next]) dfs(next);
//     }
//     stack.pop();
//   };

//   const bfs = (start) => {
//     const queue = [];
//     queue.push(start);
//     check[start] = true;
//     bfsAnswer.push(start);
//     while (queue.length !== 0) {
//       const index = queue[0];
//       queue.splice(0, 1);
//       for (let i = 0; i < list[index].length; i++) {
//         const next = list[index][i];
//         if (!check[next]) {
//           queue.push(next);
//           check[next] = true;
//           bfsAnswer.push(next);
//         }
//       }
//       if (queue.length === 0) {
//         for (let i = 1; i < N + 1; i++) {
//           if (!check[i] && list[i].length) {
//             queue.push(i);
//             check[i] = true;
//             bfsAnswer.push(i);
//           }
//         }
//       }
//     }
//   };

//   const solve = () => {
//     for (let i = 1; i < N + 1; i++) {
//       list[i] = [];
//     }
//     for (let i = 1; i < M + 1; i++) {
//       const line = input[i].split(" ").map(Number);
//       list[line[0]].push(line[1]);
//       list[line[1]].push(line[0]);
//     }
//     for (let i = 1; i < N + 1; i++) {
//       list[i].sort((a, b) => a - b);
//     }

//     dfs(V);
//     if (dfsAnswer.length !== N) {
//       for (let i = 1; i < N + 1; i++) {
//         if (!check[i] && list[i].length) dfs(i);
//       }
//     }
//     check = new Array(N + 1).fill(false);
//     bfs(V);
//     totalAnswer += dfsAnswer.join(" ") + "\n" + bfsAnswer.join(" ");
//     console.log(totalAnswer);
//   };

//   // Run
//   solve();
// };

// solution(input);
