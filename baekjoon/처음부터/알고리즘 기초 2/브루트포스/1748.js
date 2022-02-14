// const INPUT_1 = ["120"]; // 252

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   let level = 0;
//   let answer = 0;

//   for (let i = 0; i < 9; i++) {
//     const section = 9 * Math.pow(10, i);
//     if (N >= level + section) {
//       answer += section * (i + 1);
//       level += section;
//     } else {
//       answer += (N - level) * (i + 1);
//       break;
//     }
//   }
//   console.log(answer);
// };

// solution(input);
