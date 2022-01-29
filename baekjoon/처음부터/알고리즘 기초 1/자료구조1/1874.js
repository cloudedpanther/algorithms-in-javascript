// const INPUT_1 = ["8", "4", "3", "6", "8", "7", "5", "2", "1"];

// const input = INPUT_1;

// const solution = (input) => {
//   const answer = [];
//   const stack = [];
//   let nextNumber = 1;

//   const n = parseInt(input[0]);

//   for (const num of input.slice(1).map(Number)) {
//     if (stack[stack.length - 1] > num) {
//       console.log("NO");
//       return;
//     }
//     while ((stack[stack.length - 1] || -1) < num) {
//       stack.push(nextNumber);
//       answer.push("+");
//       nextNumber++;
//     }
//     if (num === stack[stack.length - 1]) {
//       stack.pop();
//       answer.push("-");
//     }
//   }
//   console.log(answer.join("\n"));
// };

// solution(input);
