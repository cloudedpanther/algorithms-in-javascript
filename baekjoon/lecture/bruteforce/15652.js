// const INPUT_1 = ["5 3"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const line = input[0].split(" ");
//   const N = parseInt(line[0]);
//   const M = parseInt(line[1]);
//   let answer = "";
//   let made = new Array(M + 1);
//   made[0] = 1;

//   // Functions
//   const go = (index) => {
//     if (index > M) {
//       for (let i = 1; i <= M; i++) {
//         answer += made[i];
//         if (i < M) answer += " ";
//       }
//       answer += "\n";
//     } else {
//       for (let i = made[index - 1]; i <= N; i++) {
//         made[index] = i;
//         go(index + 1);
//       }
//     }
//   };

//   const solve = () => {
//     go(1);
//     console.log(answer.slice(0, -1));
//   };

//   // Run
//   solve();
// };

// solution(input);
