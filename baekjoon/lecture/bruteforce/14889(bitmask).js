// const INPUT_1 = [
//   "6",
//   "0 1 2 3 4 5",
//   "1 0 2 3 4 5",
//   "1 2 0 3 4 5",
//   "1 2 3 0 4 5",
//   "1 2 3 4 0 5",
//   "1 2 3 4 5 0",
// ];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const N = parseInt(input[0]);
//   let S = new Array(N);
//   for (let i = 0; i < N; i++) {
//     S[i] = input[i + 1].split(" ").map(Number);
//   }

//   // Functions
//   const solve = () => {
//     let min = -1;
//     for (let i = 0; i < 1 << N; i++) {
//       let t1 = [];
//       let t2 = [];
//       for (let j = 0; j < N; j++) {
//         if ((i & (1 << j)) === 0) t1.push(j);
//         else t2.push(j);
//       }
//       if (t1.length !== N / 2) continue;
//       let p1 = 0;
//       let p2 = 0;
//       for (let i = 0; i < N / 2; i++) {
//         for (let j = 0; j < N / 2; j++) {
//           if (i !== j) {
//             p1 += S[t1[i]][t1[j]];
//             p2 += S[t2[i]][t2[j]];
//           }
//         }
//       }
//       const diff = Math.abs(p1 - p2);
//       if (min === -1 || min > diff) min = diff;
//     }
//     console.log(min);
//   };

//   // Run
//   solve();
// };

// solution(input);
