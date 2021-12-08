// const INPUT_1 = ["2", "3 2", "1 3", "2 3", "4 4", "1 2", "2 3", "3 4", "4 2"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   let V, E, list;
//   let check;

//   // Functions
//   const bfs = () => {
//     let queue = [];
//     queue.push(1);
//     check[1] = 1;
//     while (queue.length !== 0) {
//       const cur = queue[0];
//       queue.splice(0, 1);
//       const curTeam = check[cur];
//       const nextTeam = 3 - curTeam;
//       for (let i = 0; i < list[cur].length; i++) {
//         const next = list[cur][i];
//         if (check[next] === curTeam) {
//           return false;
//         }
//         if (!check[next]) {
//           queue.push(next);
//           check[next] = nextTeam;
//         }
//       }
//       if (queue.length === 0) {
//         for (let i = 1; i < V + 1; i++) {
//           if (!check[i]) {
//             queue.push(i);
//             check[i] = 1;
//             break;
//           }
//         }
//       }
//     }
//     return true;
//   };

//   const solve = () => {
//     let answer = [];
//     let i = 1;
//     while (i < input.length) {
//       // list initialization
//       const fl = input[i].split(" ");
//       V = Number(fl[0]);
//       E = Number(fl[1]);
//       list = new Array(V + 1);
//       for (let j = 1; j < V + 1; j++) {
//         list[j] = [];
//       }
//       for (let j = i + 1; j <= i + E; j++) {
//         const line = input[j].split(" ");
//         const n1 = Number(line[0]);
//         const n2 = Number(line[1]);
//         list[n1].push(n2);
//         list[n2].push(n1);
//       }
//       i += E + 1;
//       check = new Array(V + 1).fill(0);

//       // check if it's binary
//       if (bfs()) answer.push("YES");
//       else answer.push("NO");
//     }
//     console.log(answer.join("\n"));
//   };

//   // Run
//   solve();
// };

// solution(input);
