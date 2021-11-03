// const INPUT_1 = ["4 2", "9 8 7 1"];
// const INPUT_2 = ["4 4", "1231 1232 1233 1234"];

// const input = INPUT_2;

// // Solution
// const solution = (input) => {
//   // Variables
//   const inputLine = input[0].split(" ");
//   const N = parseInt(inputLine[0]);
//   const M = parseInt(inputLine[1]);
//   const numbers = input[1]
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b);
//   let made = new Array(M);
//   let chosen = new Array(N).fill(false);
//   let answer = "";

//   // Functions
//   const go = (index) => {
//     if (M <= index) {
//       for (let i = 0; i < M; i++) {
//         answer += made[i];
//         if (i < M) answer += " ";
//       }
//       answer += "\n";
//     } else {
//       for (let i = 0; i < N; i++) {
//         if (!chosen[i]) {
//           made[index] = numbers[i];
//           chosen[i] = true;
//           go(index + 1);
//           chosen[i] = false;
//         }
//       }
//     }
//   };

//   const solve = () => {
//     go(0);
//     console.log(answer.slice(0, -1));
//   };

//   // Run
//   solve();
// };

// solution(input);
