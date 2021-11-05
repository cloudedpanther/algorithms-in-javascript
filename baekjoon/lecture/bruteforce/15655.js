// const INPUT_1 = ["4 2", "9 8 7 1"];
// const INPUT_2 = ["4 4", "1231 1232 1233 1234"];

// const input = INPUT_2;

// // Solution
// const solution = (input) => {
//   // Variables
//   const conditions = input[0].split(" ");
//   const N = parseInt(conditions[0]);
//   const M = parseInt(conditions[1]);
//   const num = input[1]
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b);
//   let selected = new Array(M).fill(false);
//   let answer = "";

//   // Functions
//   const go = (index, level) => {
//     if (level === M) {
//       for (let i = 0, check = 0; i < N; i++) {
//         if (selected[i]) {
//           answer += num[i];
//           check++;
//           if (check < M) answer += " ";
//         }
//       }
//       answer += "\n";
//       return;
//     } else {
//       if (index >= N) return;
//       selected[index] = true;
//       go(index + 1, level + 1);
//       selected[index] = false;
//       go(index + 1, level);
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
