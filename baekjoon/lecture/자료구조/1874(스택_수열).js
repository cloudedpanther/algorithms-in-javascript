// const INPUT_1 = ["8", "4", "3", "6", "8", "7", "5", "2", "1"];
// // +
// // +
// // +
// // +
// // -
// // -
// // +
// // +
// // -
// // +
// // +
// // -
// // -
// // -
// // -
// // -
// const INPUT_2 = ["5", "1", "2", "5", "3", "4"]; // NO

// const input = INPUT_2;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);

//   // Functions
//   function solve() {
//     // initialize variables
//     const stack = [];
//     let lastNum = 0;
//     let answer = "";

//     for (let i = 1; i < N + 1; i++) {
//       const cur = parseInt(input[i]);
//       while (lastNum < cur) {
//         stack.push(++lastNum);
//         answer += "+\n";
//       }
//       if (stack[stack.length - 1] === cur) {
//         stack.pop();
//         answer += "-";
//         if (i < N) answer += "\n";
//       } else {
//         console.log("NO");
//         return;
//       }
//     }

//     console.log(answer);
//   }

//   // Run
//   solve();
// }

// solution(input);
