// const INPUT_1 = ["3 3", "1231 1232 1233"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const line = input[0].split(" ");
//   const N = parseInt(line[0]);
//   const M = parseInt(line[1]);
//   const num = input[1]
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b);
//   let made = new Array(M).fill(false);
//   let answer = "";

//   // Functions
//   const go = (index) => {
//     if (index === M) {
//       for (let i = 0; i < M; i++) {
//         answer += made[i];
//         if (i < M - 1) answer += " ";
//       }
//       answer += "\n";
//       return;
//     } else {
//       for (let i = 0; i < N; i++) {
//         made[index] = num[i];
//         go(index + 1);
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
