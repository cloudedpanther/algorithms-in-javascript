// const INPUT_1 = ["3", "4", "7", "10"];

// const input = INPUT_1;

// const solution = (input) => {
//   const answer = [];
//   const D = 1000000009;
//   const numbers = input.slice(1).map(Number);
//   const MAX = Math.max(...numbers);
//   let dp = new Array(MAX + 1).fill(1);
//   for (let i = 1; i < MAX + 1; i++) {
//     dp[i] = dp[i - 1];
//     if (i - 2 >= 0) dp[i] = (dp[i] + (dp[i - 2] % D)) % D;
//     if (i - 3 >= 0) dp[i] = (dp[i] + (dp[i - 3] % D)) % D;
//   }
//   numbers.forEach((n) => answer.push(dp[n]));
//   console.log(answer.join("\n"));
// };

// solution(input);
