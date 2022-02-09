// const INPUT_1 = ["10", "1 100 2 50 60 3 5 6 7 8"];

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const seq = input[1].split(" ").map(Number);
//   let dp = new Array(N);
//   for (let i = 0; i < N; i++) {
//     dp[i] = seq[i];
//     for (let j = 0; j < i; j++) {
//       if (seq[j] < seq[i]) dp[i] = Math.max(dp[i], dp[j] + seq[i]);
//     }
//   }
//   console.log(Math.max(...dp));
// };

// solution(input);
