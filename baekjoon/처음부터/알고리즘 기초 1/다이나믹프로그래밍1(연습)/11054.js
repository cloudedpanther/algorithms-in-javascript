// const INPUT_1 = ["10", "1 5 2 1 4 3 4 5 2 1"];

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const seq = input[1].split(" ").map(Number);
//   const dp = Array.from({ length: N }, () => new Array(2).fill(0));
//   for (let i = 1; i < N; i++) {
//     for (let j = 0; j < i; j++) {
//       if (seq[j] < seq[i]) dp[i][0] = Math.max(dp[i][0], dp[j][0] + 1);
//       if (seq[N - 1 - i] > seq[N - 1 - j])
//         dp[N - 1 - i][1] = Math.max(dp[N - 1 - i][1], dp[N - 1 - j][1] + 1);
//     }
//   }
//   const bitonic = dp.map((e) => e[0] + e[1] + 1);
//   console.log(Math.max(...bitonic));
// };

// solution(input);
