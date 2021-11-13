// const INPUT_1 = ["7 1 2 3 4 5 6 7", "8 1 2 3 5 8 13 21 34", "0"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Varibles
//   const LENGTH = 6;
//   let cmd;
//   let selected = new Array(6);
//   let answer = "";

//   // Functions
//   const getCombinations = (start, index) => {
//     if (index === LENGTH) {
//       answer += selected.join(" ") + "\n";
//       return;
//     } else {
//       const K = cmd[0];
//       const MAX_INDEX = K - LENGTH + index + 1;
//       for (let i = start; i <= MAX_INDEX; i++) {
//         selected[index] = cmd[i];
//         getCombinations(i + 1, index + 1);
//       }
//     }
//   };

//   const solve = () => {
//     for (let i = 0; i < input.length - 1; i++) {
//       cmd = input[i].split(" ").map(Number);
//       getCombinations(1, 0);
//       answer += "\n";
//     }
//     console.log(answer.trim());
//   };

//   // Run
//   solve();
// };

// solution(input);
