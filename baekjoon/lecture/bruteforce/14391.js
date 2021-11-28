// const INPUT_1 = ["4 3", "001", "010", "111", "100"];
// const INPUT_2 = ["2 3", "123", "312"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const fl = input[0].split(" ");
//   const N = Number(fl[0]);
//   const M = Number(fl[1]);
//   let S = new Array(N);
//   for (let s = 0; s < N; s++) {
//     S[s] = input[s + 1].split("").map(Number);
//   }
//   let answer = 0;

//   // Functions
//   const solve = () => {
//     for (let s = 0; s < 1 << (N * M); s++) {
//       let sum = 0;
//       // hor
//       for (let i = 0; i < N; i++) {
//         let tmp = 0;
//         for (let j = 0; j < M; j++) {
//           const k = i * M + j;
//           if ((s & (1 << k)) === 0) tmp = tmp * 10 + S[i][j];
//           else {
//             sum += tmp;
//             tmp = 0;
//           }
//         }
//         sum += tmp;
//       }

//       // ver
//       for (let j = 0; j < M; j++) {
//         let tmp = 0;
//         for (let i = 0; i < N; i++) {
//           const k = i * M + j;
//           if ((s & (1 << k)) !== 0) {
//             tmp = tmp * 10 + S[i][j];
//           } else {
//             sum += tmp;
//             tmp = 0;
//           }
//         }
//         sum += tmp;
//       }
//       answer = Math.max(answer, sum);
//     }
//     console.log(answer);
//   };

//   // Run
//   solve();
// };

// solution(input);
