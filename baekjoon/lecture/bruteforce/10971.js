// const INPUT_1 = ["4", "0 10 15 20", "5 0 9 10", "6 13 0 12", "8 8 9 0"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const N = parseInt(input[0]);
//   const W = new Array(N);
//   for (let i = 0; i < N; i++) {
//     W[i] = input[i + 1].split(" ").map(Number);
//   }
//   let seq = new Array(N);
//   for (let i = 0; i < N; i++) {
//     seq[i] = i;
//   }

//   // Functions
//   const swap = (i, j) => {
//     const tmp = seq[i];
//     seq[i] = seq[j];
//     seq[j] = tmp;
//   };

//   const nextPermutationExists = () => {
//     let i = N - 1;
//     while (seq[i - 1] > seq[i]) i--;
//     if (i === 0) return false;
//     let j = N - 1;
//     while (seq[i - 1] > seq[j]) j--;
//     swap(i - 1, j);
//     j = N - 1;
//     while (i < j) {
//       swap(i, j);
//       i++;
//       j--;
//     }
//     return true;
//   };

//   const calculateTravelFee = () => {
//     let travelFee = 0;
//     for (let i = 0; i < N; i++) {
//       const start = seq[i];
//       const finish = i < N - 1 ? seq[i + 1] : seq[0];
//       const sectionFee = W[start][finish];
//       if (sectionFee === 0) return -1;
//       travelFee += sectionFee;
//     }
//     return travelFee;
//   };

//   const solve = () => {
//     let minFee = -1;
//     do {
//       const fee = calculateTravelFee();
//       if (fee === -1) continue;
//       if (minFee === -1) minFee = fee;
//       else minFee = Math.min(minFee, fee);
//     } while (nextPermutationExists());
//     console.log(minFee);
//   };

//   // Run
//   solve();
// };

// solution(input);
