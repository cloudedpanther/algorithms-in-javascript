// const INPUT_1 = ["10", "5 10 11 12 13 30 35 40 45 47"];

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const P = [null, ...input[1].split(" ").map(Number)];
//   let dp = new Array(N + 1).fill(0);

//   for (let i = 1; i < N + 1; i++) {
//     for (let j = 0; j < i; j++) {
//       dp[i] = Math.max(dp[i], dp[j] + P[i - j]);
//     }
//   }
//   console.log(dp[N]);
// };

// solution(input);
