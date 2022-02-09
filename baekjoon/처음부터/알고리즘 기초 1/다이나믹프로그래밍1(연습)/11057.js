// const INPUT_1 = ["3"]; // 220

// const input = INPUT_1;

// const solution = (input) => {
//   const D = 10007;
//   const N = parseInt(input[0]);
//   let dp = [
//     new Array(10).fill(1),
//     ...Array.from({ length: N }, () => new Array(10).fill(0)),
//   ];
//   for (let k = 1; k < N + 1; k++) {
//     const cur = dp[k];
//     const prev = dp[k - 1];
//     for (let i = 0; i < 10; i++) {
//       for (let j = 0; j <= i; j++) {
//         cur[i] = (cur[i] + prev[j]) % D;
//       }
//     }
//   }
//   console.log(dp[N][9]);
// };

// solution(input);
