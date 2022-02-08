// const INPUT_1 = ["10", "10 -4 3 1 5 6 -35 12 21 -1"];

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const seq = input[1].split(" ").map(Number);
//   let dp = new Array(N);
//   for (let i = 0; i < N; i++) {
//     dp[i] = seq[i];
//     if (i > 0) dp[i] = Math.max(dp[i], dp[i] + dp[i - 1]);
//   }
//   console.log(Math.max(...dp));
// };

// solution(input);
