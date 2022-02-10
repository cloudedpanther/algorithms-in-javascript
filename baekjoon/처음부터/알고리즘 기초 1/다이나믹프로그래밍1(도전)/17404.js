// const INPUT_1 = [
//   "6",
//   "30 19 5",
//   "64 77 64",
//   "15 19 97",
//   "4 71 57",
//   "90 86 84",
//   "93 32 91",
// ];

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const initialColor = input[1].split(" ").map(Number);
//   let answer = Infinity;
//   for (let k = 0; k < 3; k++) {
//     let dp = Array.from({ length: N }, () => new Array(3).fill(Infinity));
//     dp[0][k] = initialColor[k];
//     for (let i = 1; i < N; i++) {
//       const color = input[i + 1].split(" ").map(Number);
//       for (let j = 0; j < 3; j++) {
//         dp[i][j] =
//           Math.min(dp[i - 1][(j + 1) % 3], dp[i - 1][(j + 2) % 3]) + color[j];
//       }
//     }
//     answer = Math.min(answer, ...dp[N - 1].filter((_, idx) => idx !== k));
//   }
//   console.log(answer);
// };

// solution(input);
