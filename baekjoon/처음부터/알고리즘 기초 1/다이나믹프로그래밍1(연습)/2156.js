// const INPUT_1 = ["6", "6", "10", "13", "9", "8", "1"];

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const wines = [null, ...input.slice(1).map(Number)];
//   let dp = Array.from({ length: N + 1 }, () => new Array(3).fill(0));
//   for (let i = 1; i < N + 1; i++) {
//     dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]);
//     dp[i][1] = dp[i - 1][0] + wines[i];
//     dp[i][2] = dp[i - 1][1] + wines[i];
//   }
//   console.log(Math.max(...dp[N]));
// };

// solution(input);
