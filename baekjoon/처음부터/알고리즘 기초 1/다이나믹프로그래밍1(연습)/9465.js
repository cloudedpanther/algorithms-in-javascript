// const INPUT_1 = [
//   "2",
//   "5",
//   "50 10 100 20 40",
//   "30 50 70 10 60",
//   "7",
//   "10 30 10 50 100 20 40",
//   "20 40 30 50 60 20 80",
// ];

// const input = INPUT_1;

// const solution = (input) => {
//   const answer = [];
//   for (let t = 1; t < input.length; t += 3) {
//     const N = parseInt(input[t]);
//     const up = [null, ...input[t + 1].split(" ").map(Number)];
//     const down = [null, ...input[t + 2].split(" ").map(Number)];
//     let dp = Array.from({ length: N + 1 }, () => new Array(3).fill(0));
//     for (let i = 1; i < N + 1; i++) {
//       dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]);
//       dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][2]) + up[i];
//       dp[i][2] = Math.max(dp[i - 1][0], dp[i - 1][1]) + down[i];
//     }
//     answer.push(Math.max(...dp[N]));
//   }
//   console.log(answer.join("\n"));
// };

// solution(input);
