// const INPUT_1 = ["3", "4", "7", "10"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const T = parseInt(input[0]);

//   // Functions
//   const go = (start, goal) => {
//     if (start > goal) return 0;
//     if (start === goal) return 1;
//     let sum = 0;
//     for (let i = 1; i <= 3; i++) {
//       sum += go(start + i, goal);
//     }
//     return sum;
//   };

//   const solve = () => {
//     let answer = "";
//     for (let i = 1; i <= T; i++) {
//       const N = parseInt(input[i]);
//       answer += go(0, N) + "\n";
//     }
//     console.log(answer.trim());
//   };

//   // Run
//   solve();
// };

// solution(input);
