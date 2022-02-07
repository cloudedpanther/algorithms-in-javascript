// const INPUT_1 = ["3", "4", "7", "100000"];

// const input = INPUT_1;

// const solution = (input) => {
//   const answer = [];
//   const d = 1000000009;
//   const numbers = input.slice(1).map(Number);
//   const MAX = Math.max(...numbers);
//   let dp = Array.from({ length: MAX + 1 }, () => new Array(3).fill(0));
//   for (let i = 1; i < MAX + 1; i++) {
//     for (let j = 0; j < 3; j++) {
//       if (i - j - 1 >= 0)
//         dp[i][j] =
//           ((dp[i - j - 1][(j + 1) % 3] % d) +
//             (dp[i - j - 1][(j + 2) % 3] % d)) %
//           d;
//       if (i === j + 1) dp[i][j]++;
//     }
//   }
//   for (const n of numbers) {
//     answer.push(dp[n].reduce((acc, cur) => (acc + cur) % d));
//   }
//   console.log(answer.join("\n"));
// };

// solution(input);
