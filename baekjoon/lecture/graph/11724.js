// const INPUT_1 = ["6 5", "1 2", "2 5", "5 1", "3 4", "4 6"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const fl = input[0].split(" ");
//   const N = Number(fl[0]);
//   const M = Number(fl[1]);
//   let list = new Array(N + 1);
//   let check = new Array(N + 1).fill(0);

//   // Functions
//   const bfs = () => {
//     let cc = 1;
//     let queue = [];
//     queue.push(1);
//     check[1] = 1;
//     while (queue.length !== 0) {
//       const cur = queue[0];
//       queue.splice(0, 1);
//       for (let i = 0; i < list[cur].length; i++) {
//         const next = list[cur][i];
//         if (!check[next]) {
//           queue.push(next);
//           check[next] = 1;
//         }
//       }
//       if (queue.length === 0) {
//         for (let i = 1; i < N + 1; i++) {
//           if (!check[i]) {
//             queue.push(i);
//             check[i] = 1;
//             cc++;
//             break;
//           }
//         }
//       }
//     }
//     return cc;
//   };

//   const solve = () => {
//     let cc = 0;
//     for (let i = 1; i < N + 1; i++) {
//       list[i] = [];
//     }
//     for (let i = 1; i < M + 1; i++) {
//       const line = input[i].split(" ");
//       const n1 = Number(line[0]);
//       const n2 = Number(line[1]);
//       list[n1].push(n2);
//       list[n2].push(n1);
//     }
//     cc = bfs();
//     console.log(cc);
//   };

//   // // Solution
//   // const solution = (input) => {
//   //   // Variables
//   //   const fl = input[0].split(" ");
//   //   const N = Number(fl[0]);
//   //   const M = Number(fl[1]);
//   //   const stack = [];
//   //   let list = new Array(N + 1);
//   //   let check = new Array(N + 1).fill(0);

//   //   // Functions
//   //   const dfs = (node) => {
//   //     stack.push(node);
//   //     check[node] = 1;
//   //     for (let i = 0; i < list[node].length; i++) {
//   //       const nextNode = list[node][i];
//   //       if (!check[nextNode]) {
//   //         dfs(nextNode);
//   //       }
//   //     }
//   //     stack.pop();
//   //   };

//   //   const solve = () => {
//   //     let cc = 0;
//   //     for (let i = 1; i < N + 1; i++) {
//   //       list[i] = [];
//   //     }
//   //     for (let i = 1; i < M + 1; i++) {
//   //       const line = input[i].split(" ");
//   //       const n1 = Number(line[0]);
//   //       const n2 = Number(line[1]);
//   //       list[n1].push(n2);
//   //       list[n2].push(n1);
//   //     }
//   //     for (let i = 1; i < N + 1; i++) {
//   //       if (!check[i]) {
//   //         dfs(i);
//   //         cc++;
//   //       }
//   //     }
//   //     console.log(cc);
//   //   };

//   // Run
//   solve();
// };

// solution(input);
