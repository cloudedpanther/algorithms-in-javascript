// const INPUT_1 = ["5 0", "-7 -3 -2 5 8"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const fl = input[0].split(" ");
//   const N = Number(fl[0]);
//   const S = Number(fl[1]);
//   const seq = input[1].split(" ").map(Number);
//   let answer = 0;

//   // Functions
//   const calc = (num) => {
//     let sum = 0;
//     for (let i = 0; i < N; i++) {
//       if ((num & (1 << i)) !== 0) {
//         sum += seq[i];
//       }
//     }
//     if (sum === S) answer++;
//   };

//   const solve = () => {
//     for (let i = 1; i < 1 << N; i++) {
//       calc(i);
//     }
//     console.log(answer);
//   };

//   // Run
//   solve();
// };

// solution(input);
