// const INPUT_1 = ["5 4", "0 1", "1 2", "2 3", "3 4"];
// const INPUT_2 = ["6 5", "0 1", "0 2", "0 3", "0 4", "0 5"];

// const input = INPUT_2;

// // Solution
// const solution = (input) => {
//   // Variables
//   const fl = input[0].split(" ");
//   const N = Number(fl[0]); // number of people
//   const M = Number(fl[1]); // number of relations
//   let list = new Array(N);
//   for (let i = 0; i < N; i++) {
//     list[i] = [];
//   }

//   // Functions
//   const connect = (index, past) => {
//     if (past.length === 5) {
//       console.log(1);
//       process.exit();
//     }
//     for (let i = 0; i < list[index].length; i++) {
//       const nextIndex = list[index][i];
//       if (past.indexOf(nextIndex) === -1) {
//         connect(nextIndex, past.concat([nextIndex]));
//       }
//     }
//   };

//   const solve = () => {
//     for (let i = 1; i <= M; i++) {
//       const cur = input[i].split(" ");
//       const n1 = Number(cur[0]);
//       const n2 = Number(cur[1]);
//       list[n1].push(n2);
//       list[n2].push(n1);
//     }

//     for (let i = 0; i < N; i++) {
//       connect(i, [i]);
//     }
//     console.log(0);
//     return;
//   };

//   // Run
//   solve();
// };

// solution(input);
