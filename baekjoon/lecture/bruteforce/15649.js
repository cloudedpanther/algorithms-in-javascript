// const INPUT_1 = ["4 2"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const N = parseInt(input[0]);
//   const M = parseInt(input[1]);
//   let chosen = new Array(N + 1).fill(false);
//   let seq = new Array(M + 1);
//   let answer = "";

//   // Functions
//   const calc = (index) => {
//     if (index <= M) {
//       for (let i = 1; i <= N; i++) {
//         if (!chosen[i]) {
//           chosen[i] = true;
//           seq[index] = i;
//           calc(index + 1);
//           chosen[i] = false;
//         }
//       }
//     } else {
//       for (let i = 1; i <= M; i++) {
//         answer += seq[i];
//         if (i < M) answer += " ";
//       }
//       answer += "\n";
//     }
//   };

//   const solve = () => {
//     calc(1);
//     console.log(answer.slice(0, -1));
//   };

//   // Run
//   solve();
// };

// solution(input[0].split(" "));
