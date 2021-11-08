// const INPUT_1 = ["4 2", "9 8 7 1"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const line = input[0].split(" ");
//   const N = parseInt(line[0]);
//   const M = parseInt(line[1]);
//   const num = input[1]
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b);
//   let selected = new Array(N).fill(0);
//   let answer = "";

//   // Functions
//   const printSeq = (index) => {
//     for (let i = 0; i < index; i++) {
//       if (selected[i] !== 0) {
//         for (let j = 0; j < selected[i]; j++) {
//           answer += num[i] + " ";
//         }
//       }
//     }
//     answer += "\n";
//   };

//   const go = (index, level) => {
//     if (level === M) {
//       printSeq(index);
//       return;
//     } else {
//       if (index === N) return;
//       else {
//         for (let i = M - level; i >= 0; i--) {
//           selected[index] = i;
//           go(index + 1, level + i);
//         }
//       }
//     }
//   };

//   const solve = () => {
//     go(0, 0);
//     console.log(answer.slice(0, -1));
//   };

//   // Run
//   solve();
// };

// solution(input);
