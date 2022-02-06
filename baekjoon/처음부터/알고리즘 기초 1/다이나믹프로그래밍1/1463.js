// const INPUT_1 = ["10"];

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   let dp = [null, 0, ...new Array(N - 1).fill(Infinity)];
//   for (let i = 1; i < N; i++) {
//     const option = [i + 1, i * 2, i * 3];
//     option.forEach((e) => {
//       if (e <= N) dp[e] = Math.min(dp[e], dp[i] + 1);
//     });
//   }
//   console.log(dp[N]);
// };

// solution(input);
