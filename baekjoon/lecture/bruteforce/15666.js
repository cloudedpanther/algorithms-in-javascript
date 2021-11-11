// const INPUT_1 = ["4 4", "1 1 2 2"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const line = input[0].split(" ");
//   const M = parseInt(line[1]);
//   const origin = input[1]
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b);
//   const numSet = new Set();
//   for (let i = 0; i < origin.length; i++) {
//     const cur = origin[i];
//     if (!numSet.has(cur)) numSet.add(cur);
//   }
//   const num = [...numSet];
//   const N = num.length;
//   let selected = new Array(N).fill(0);
//   let answer = "";

//   // Functions
//   const print = () => {
//     const seq = [];
//     selected.forEach((v, ix) => {
//       for (let i = 0; i < v; i++) {
//         seq.push(num[ix]);
//       }
//     });
//     answer += seq.join(" ") + "\n";
//   };

//   const go = (index, level) => {
//     if (level === M) {
//       print();
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
//     console.log(answer.trim());
//   };

//   // Run
//   solve();
// };

// solution(input);
