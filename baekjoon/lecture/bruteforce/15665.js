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
//   let made = new Array(M);
//   let answer = "";

//   // Functions
//   const print = () => {
//     answer += made.join(" ") + "\n";
//   };

//   const go = (index) => {
//     if (index === M) {
//       print();
//       return;
//     } else {
//       for (let i = 0; i < N; i++) {
//         made[index] = num[i];
//         go(index + 1);
//       }
//     }
//   };

//   const solve = () => {
//     go(0);
//     console.log(answer.trim());
//   };

//   // Run
//   solve();
// };

// solution(input);
