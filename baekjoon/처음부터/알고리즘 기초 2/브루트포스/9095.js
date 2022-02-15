// const INPUT_1 = ["3", "4", "7", "10"];

// const input = INPUT_1;

// function getCases(num) {
//   if (num === 0) return 1;
//   if (num < 0) return 0;

//   let sum = 0;
//   for (let i = 1; i < 4; i++) {
//     sum += getCases(num - i);
//   }
//   return sum;
// }

// const solution = (input) => {
//   const answer = [];
//   let cases = new Array(12);
//   for (let i = 1; i < 12; i++) {
//     cases[i] = getCases(i);
//   }
//   for (const num of input.slice(1).map(Number)) {
//     answer.push(cases[num]);
//   }
//   console.log(answer.join("\n"));
// };

// solution(input);
