// const INPUT_1 = ["10"]; //3

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   if (N % 2 !== 0) {
//     console.log(0);
//     return;
//   }
//   const level = N / 2;
//   let dp = [1, 3, new Array(level - 1)];
//   for (let i = 2; i < level + 1; i++) {
//     dp[i] = dp[i - 1] * 3;
//     for (let j = 0; j < i - 1; j++) {
//       dp[i] += dp[j] * 2;
//     }
//   }
//   console.log(dp[level]);
// };

// solution(input);
