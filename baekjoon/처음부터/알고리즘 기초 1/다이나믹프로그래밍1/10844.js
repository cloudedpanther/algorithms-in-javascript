// const INPUT_1 = ["2"]; // 17

// const input = INPUT_1;

// const solution = (input) => {
//   const D = 1000000000;
//   const N = parseInt(input[0]);
//   let dp = [
//     null,
//     [0, ...new Array(9).fill(1)],
//     ...Array.from({ length: N - 1 }, () => new Array(10).fill(0)),
//   ];
//   for (let i = 2; i < N + 1; i++) {
//     for (let j = 0; j < 10; j++) {
//       if (j > 0) dp[i][j] += dp[i - 1][j - 1] % D;
//       if (j < 9) dp[i][j] += dp[i - 1][j + 1] % D;
//       dp[i][j] %= D;
//     }
//   }
//   console.log(dp[N].reduce((acc, cur) => (acc + cur) % D));
// };

// solution(input);
