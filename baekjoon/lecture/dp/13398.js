// const INPUT_1 = ["10", "10 -4 3 1 5 6 -35 12 21 -1"]; // 54

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const seq = input[1].split(" ").map((e) => parseInt(e));

//   // Functions
//   function solve() {
//     let dpL = new Array(N);
//     let dpR = new Array(N);
//     for (let i = 0; i < N; i++) {
//       dpL[i] = seq[i];
//       dpR[i] = seq[i];
//     }
//     for (let i = 1; i < N; i++) {
//       const iR = N - 1 - i;
//       dpL[i] = Math.max(dpL[i], dpL[i - 1] + seq[i]);
//       dpR[iR] = Math.max(dpR[iR], dpR[iR + 1] + seq[iR]);
//     }
//     let maxValue = Math.max(...dpL);
//     for (let i = 1; i < N - 1; i++) {
//       const newValue = dpL[i - 1] + dpR[i + 1];
//       maxValue = Math.max(maxValue, newValue);
//     }
//     console.log(maxValue);
//   }

//   // Run
//   solve();
// }

// solution(input);
