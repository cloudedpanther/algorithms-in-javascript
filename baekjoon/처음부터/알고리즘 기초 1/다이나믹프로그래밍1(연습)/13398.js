// const INPUT_1 = ["10", "10 -4 3 1 5 6 -35 12 21 -1"];
// const INPUT_2 = ["3", "-5 -6 3"];

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const seq = input[1].split(" ").map(Number);
//   let answer = seq[0];
//   let dp = [[seq[0], 0], ...Array.from({ length: N - 1 }, () => new Array(2))];

//   for (let i = 1; i < N; i++) {
//     dp[i][0] = Math.max(seq[i], seq[i] + dp[i - 1][0]);
//     dp[i][1] = Math.max(dp[i - 1][0], seq[i], seq[i] + dp[i - 1][1]);
//     answer = Math.max(answer, dp[i][0], dp[i][1]);
//   }
//   console.log(answer);
// };

// solution(input);
