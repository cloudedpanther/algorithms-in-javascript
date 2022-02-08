// const INPUT_1 = ["13"]; // 2

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   let dp = [0, ...new Array(N).fill(Infinity)];
//   for (let i = 0; i < N + 1; i++) {
//     for (let j = 1; j * j + i <= N; j++) {
//       const next = j * j + i;
//       dp[next] = Math.min(dp[next], dp[i] + 1);
//     }
//   }
//   console.log(dp[N]);
// };

// solution(input);
