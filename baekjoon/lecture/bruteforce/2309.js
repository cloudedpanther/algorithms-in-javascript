// const INPUT_1 = ["20", "7", "23", "19", "10", "15", "25", "8", "13"];
// // 7
// // 8
// // 10
// // 13
// // 19
// // 20
// // 23

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const midgets = input.map((e) => parseInt(e));

//   // Functions
//   function solve() {
//     const TOTAL_MIDGETS = 9;
//     for (let i = 0; i < TOTAL_MIDGETS - 1; i++) {
//       for (let j = i + 1; j < TOTAL_MIDGETS; j++) {
//         const filtered = midgets.filter(
//           (e, index) => index !== i && index !== j
//         );
//         const sum = filtered.reduce((a, b) => a + b);
//         if (sum === 100) {
//           filtered.sort((a, b) => a - b).map((e) => console.log(e));
//           return;
//         }
//       }
//     }
//   }

//   // Run
//   solve();
// }

// solution(input);
