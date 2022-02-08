// const INPUT_1 = ["6 4"];

// const input = INPUT_1;

// const solution = (input) => {
//   const D = 1000000000;
//   const [N, K] = input[0].split(" ").map(Number);
//   let dp = [
//     null,
//     new Array(N + 1).fill(1),
//     ...Array.from({ length: K - 1 }, () => new Array(N + 1).fill(0)),
//   ];
//   for (let d = 2; d < K + 1; d++) {
//     const cur = dp[d];
//     const prev = dp[d - 1];
//     for (let i = 0; i < N + 1; i++) {
//       for (let j = 0; j <= i; j++) {
//         cur[i] = (cur[i] + prev[j]) % D;
//       }
//     }
//   }
//   console.log(dp[K][N]);
// };

// solution(input);
