// const INPUT_1 = ["6", "10 20 10 30 20 50"];

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const seq = input[1].split(" ").map(Number);
//   let maxValue = 1;
//   let maxValueIndex = 0;
//   let dp = new Array(N).fill(1);
//   let partials = [...seq].map((e) => [e]);
//   for (let i = 1; i < N; i++) {
//     for (let j = 0; j < i; j++) {
//       if (seq[j] < seq[i] && dp[i] < dp[j] + 1) {
//         dp[i] = dp[j] + 1;
//         partials[i] = [...partials[j], seq[i]];
//       }
//     }
//     if (maxValue < dp[i]) {
//       maxValue = dp[i];
//       maxValueIndex = i;
//     }
//   }
//   console.log(maxValue);
//   console.log(partials[maxValueIndex].join(" "));
// };

// solution(input);
