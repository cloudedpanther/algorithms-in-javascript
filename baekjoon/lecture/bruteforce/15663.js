// const INPUT_1 = ["4 2", "9 7 9 1"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const line = input[0].split(" ");
//   const prevN = parseInt(line[0]);
//   const M = parseInt(line[1]);
//   const prevNum = input[1]
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b);
//   const num = [];
//   let left = [];
//   let prevIndex = -1;
//   let prevValue = -1;
//   for (let i = 0; i < prevN; i++) {
//     const curValue = prevNum[i];
//     if (curValue !== prevValue) {
//       num.push(curValue);
//       left.push(1);
//       prevIndex++;
//       prevValue = curValue;
//     } else {
//       left[prevIndex]++;
//     }
//   }
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
//         if (left[i] > 0) {
//           made[index] = num[i];
//           left[i]--;
//           go(index + 1);
//           left[i]++;
//         }
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
