// const INPUT_1 = ["4", "1 2 3 4"];
// const INPUT_2 = ["5", "5 4 3 2 1"];
// const INPUT_3 = ["4", "1 4 3 2"];
// const INPUT_4 = ["8", "8 6 1 3 7 5 4 2"];

// const input = INPUT_4;

// // Solution
// const solution = (input) => {
//   // Variables
//   const N = parseInt(input[0]);
//   const seq = input[1].split(" ").map(Number);

//   // Functions
//   const solve = () => {
//     const reversed = [];
//     let headEnd = -1;
//     let replaced = -1;
//     for (let i = N - 1; i > 0; i--) {
//       reversed.push(seq[i]);
//       if (seq[i - 1] < seq[i]) {
//         headEnd = i - 1;
//         break;
//       }
//     }
//     if (headEnd === -1) {
//       console.log(-1);
//       return;
//     }
//     let newSeq = "";
//     for (let i = 0; i < headEnd; i++) {
//       newSeq += seq[i] + " ";
//     }
//     for (let i = 0; i < reversed.length; i++) {
//       if (seq[headEnd] < reversed[i]) {
//         replaced = i;
//         newSeq += reversed[replaced] + " ";
//         break;
//       }
//     }
//     for (let i = 0; i < reversed.length; i++) {
//       if (i !== replaced) newSeq += reversed[i] + " ";
//       else if (i === replaced) newSeq += seq[headEnd] + " ";
//     }
//     console.log(newSeq.trim());
//   };

//   // Run
//   solve();
// };

// solution(input);
