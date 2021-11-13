// const INPUT_1 = ["3"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const N = parseInt(input[0]);
//   const seq = [];
//   for (let i = 1; i <= N; i++) {
//     seq.push(i);
//   }

//   // Functions
//   const swap = (i, j) => {
//     const tmp = seq[i];
//     seq[i] = seq[j];
//     seq[j] = tmp;
//   };

//   const nextPermutationExist = () => {
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

//   const solve = () => {
//     let answer = "";
//     do {
//       answer += seq.join(" ") + "\n";
//     } while (nextPermutationExist());
//     console.log(answer.trim());
//   };

//   // Run
//   solve();
// };

// solution(input);
