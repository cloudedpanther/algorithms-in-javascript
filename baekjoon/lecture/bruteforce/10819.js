// const INPUT_1 = ["6", "20 1 15 8 4 10"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const N = parseInt(input[0]);
//   const seq = input[1]
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b);

//   // Functions
//   const swap = (i, j) => {
//     const tmp = seq[i];
//     seq[i] = seq[j];
//     seq[j] = tmp;
//   };

//   const nextPermutationExists = () => {
//     let i = N - 1;
//     while (seq[i - 1] >= seq[i]) i--;
//     if (i <= 0) return false;
//     let j = N - 1;
//     while (seq[i - 1] >= seq[j]) j--;
//     swap(i - 1, j);
//     j = N - 1;
//     while (i < j) {
//       swap(i, j);
//       i++;
//       j--;
//     }
//     return true;
//   };

//   const calculate = () => {
//     let value = 0;
//     for (let i = 0; i < N - 1; i++) {
//       value += Math.abs(seq[i] - seq[i + 1]);
//     }
//     return value;
//   };

//   const solve = () => {
//     let maxValue = 0;
//     do {
//       const newValue = calculate();
//       maxValue = Math.max(maxValue, newValue);
//     } while (nextPermutationExists());
//     console.log(maxValue);
//   };

//   // Run
//   solve();
// };

// solution(input);
