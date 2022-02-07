// const INPUT_1 = ["3", "4", "7", "10"];

// const input = INPUT_1;

// const solution = (input) => {
//   const answer = [];
//   const numbers = input.slice(1).map(Number);
//   const MAX = Math.max(...numbers);

//   let dp = new Array(MAX + 1).fill(1);
//   for (let i = 2; i < MAX + 1; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//     if (i > 2) dp[i] += dp[i - 3];
//   }
//   numbers.forEach((n) => answer.push(dp[n]));
//   console.log(answer.join("\n"));
// };

// solution(input);
