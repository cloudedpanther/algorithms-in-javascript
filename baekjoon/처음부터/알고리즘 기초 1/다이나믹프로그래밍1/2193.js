// const INPUT_1 = ["3"];

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   let dp = [
//     null,
//     [0n, 1n],
//     ...Array.from({ length: N - 1 }, () => new Array(2).fill(0n)),
//   ];
//   for (let i = 2; i < N + 1; i++) {
//     dp[i][0] = dp[i - 1][0] + dp[i - 1][1];
//     dp[i][1] = dp[i - 1][0];
//   }
//   console.log(String(dp[N][0] + dp[N][1]));
// };

// solution(input);
