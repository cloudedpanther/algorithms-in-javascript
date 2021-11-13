// const INPUT_1 = ["5", "5 4 3 2 1"];
// const INPUT_2 = ["7", "6 1 4 2 3 5 7"];

// const input = INPUT_2;

// // Solution
// const solution = (input) => {
//   // Variables
//   const N = parseInt(input[0]);
//   const seq = input[1].split(" ").map(Number);

//   // Functions
//   const swap = (i, j) => {
//     const tmp = seq[i];
//     seq[i] = seq[j];
//     seq[j] = tmp;
//   };

//   const solve = () => {
//     let i = N - 1;
//     while (seq[i - 1] <= seq[i]) i--;
//     if (i <= 0) {
//       console.log(-1);
//       return;
//     }
//     let j = N - 1;
//     while (seq[i - 1] <= seq[j]) j--;
//     swap(i - 1, j);
//     j = N - 1;
//     while (i < j) {
//       swap(i, j);
//       i++;
//       j--;
//     }
//     console.log(seq.join(" "));
//   };

//   // Run
//   solve();
// };

// solution(input);
