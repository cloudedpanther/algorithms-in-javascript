// const INPUT_1 = ["1 16 16"]; // 16

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const MAX = 7980;
//   const year = input[0].split(" ").map((e) => parseInt(e));
//   const E = year[0];
//   const S = year[1];
//   const M = year[2];
//   //   1 ≤ E ≤ 15, 1 ≤ S ≤ 28, 1 ≤ M ≤ 19

//   // Functions
//   function solve() {
//     for (let i = 1; i < MAX + 1; i++) {
//       if ((i - E) % 15 === 0 && (i - S) % 28 === 0 && (i - M) % 19 === 0) {
//         console.log(i);
//         return;
//       }
//     }
//   }

//   // Run
//   solve();
// }

// solution(input);
