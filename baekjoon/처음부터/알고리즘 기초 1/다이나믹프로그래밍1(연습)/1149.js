// const INPUT_1 = ["3", "26 40 83", "49 60 57", "13 89 99"];

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   let dp = Array.from({ length: N + 1 }, () => new Array(3).fill(0));
//   for (let i = 1; i < N + 1; i++) {
//     const [R, G, B] = input[i].split(" ").map(Number);
//     dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + R;
//     dp[i][1] = Math.min(dp[i - 1][2], dp[i - 1][0]) + G;
//     dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + B;
//   }
//   console.log(Math.min(...dp[N]));
// };

// solution(input);
