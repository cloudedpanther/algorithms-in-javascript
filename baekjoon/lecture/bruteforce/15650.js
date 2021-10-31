// const INPUT_1 = ["4 2"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const line = input[0].split(" ");
//   const N = parseInt(line[0]);
//   const M = parseInt(line[1]);
//   let chosen = new Array(N + 1).fill(false);
//   let made = new Array(M + 1);
//   let answer = "";

//   // Functions
//   const go = (index, start) => {
//     if (index > M) {
//       for (let i = 1; i <= M; i++) {
//         answer += made[i];
//         if (i < M) answer += " ";
//       }
//       answer += "\n";
//     } else {
//       for (let i = start; i <= N; i++) {
//         if (!chosen[i]) {
//           chosen[i] = true;
//           made[index] = i;
//           go(index + 1, i + 1);
//           chosen[i] = false;
//         }
//       }
//     }
//   };

//   const solve = () => {
//     go(1, 1);
//     console.log(answer.slice(0, -1));
//   };

//   // Run
//   solve();
// };

// solution(input);
