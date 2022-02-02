// const INPUT_1 = ["3", "1 45000", "6 10", "13 17"];

// const input = INPUT_1;

// const solution = (input) => {
//   const answer = [];
//   input.slice(1).forEach((e) => {
//     const [n1, n2] = e
//       .split(" ")
//       .map(Number)
//       .sort((a, b) => a - b);
//     for (let i = n1; i > 0; i--) {
//       if (n1 % i === 0 && n2 % i === 0) {
//         answer.push((n1 * n2) / i);
//         break;
//       }
//     }
//   });
//   console.log(answer.join("\n"));
// };

// solution(input);
