// const INPUT_1 = ["5", "7", "3 8", "8 1 0", "2 7 4 4", "4 5 2 6 5"];

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   let dp = Array.from({ length: N }, (_, idx) => new Array(idx + 1).fill(0));
//   for (let i = 0; i < N; i++) {
//     const row = input[i + 1].split(" ").map(Number);
//     for (let j = 0; j < i + 1; j++) {
//       dp[i][j] += row[j];
//       if (i + 1 < N) dp[i + 1][j] = Math.max(dp[i + 1][j], dp[i][j]);
//       if (i + 1 < N) dp[i + 1][j + 1] = Math.max(dp[i + 1][j + 1], dp[i][j]);
//     }
//   }
//   console.log(Math.max(...dp[N - 1]));
// };

// solution(input);
