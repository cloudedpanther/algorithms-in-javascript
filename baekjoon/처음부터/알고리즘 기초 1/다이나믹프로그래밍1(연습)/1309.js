// const INPUT_1 = ["4"]; // 41

// const input = INPUT_1;

// const solution = (input) => {
//   const D = 9901;
//   const N = parseInt(input[0]);
//   let dp = Array.from({ length: N + 1 }, () => new Array(3).fill(1));
//   for (let i = 1; i < N + 1; i++) {
//     dp[i][0] = (((dp[i - 1][0] + dp[i - 1][1]) % D) + dp[i - 1][2]) % D;
//     dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % D;
//     dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % D;
//   }
//   console.log(dp[N][0]);
// };

// solution(input);
