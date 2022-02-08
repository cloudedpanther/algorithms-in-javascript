// const INPUT_1 = ["6", "10 20 10 30 20 50"];

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const seq = input[1].split(" ").map(Number);
//   let dp = new Array(N).fill(1);
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < i; j++) {
//       if (seq[j] < seq[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
//     }
//   }
//   console.log(Math.max(...dp));
// };

// solution(input);
