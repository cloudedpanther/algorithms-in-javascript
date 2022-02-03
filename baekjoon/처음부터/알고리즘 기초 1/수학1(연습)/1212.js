// const INPUT_1 = ["314"];

// const input = INPUT_1;

// const solution = (input) => {
//   if (input[0] === "0") {
//     console.log(0);
//     return;
//   }
//   let answer = [];
//   input[0].split("").forEach((e) => {
//     let octal = parseInt(e);
//     for (let i = 2; i >= 0; i--) {
//       const divider = Math.pow(2, i);
//       answer.push(Math.floor(octal / divider));
//       octal = octal % divider;
//     }
//   });
//   while (answer[0] === 0) answer.shift();
//   console.log(answer.join(""));
// };

// solution(input);
