// const INPUT_1 = ["6", "10 20 10 30 20 50"];

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const seq = input[1].split(" ").map(Number);
//   let maxValue = 1;
//   let maxValueIndex = 0;
//   let dp = Array.from({ length: N }, () => [1, -1]);
//   for (let i = 1; i < N; i++) {
//     for (let j = 0; j < i; j++) {
//       if (seq[j] < seq[i] && dp[i][0] < dp[j][0] + 1) {
//         dp[i][0] = dp[j][0] + 1;
//         dp[i][1] = j;
//       }
//     }
//     if (maxValue < dp[i][0]) {
//       maxValue = dp[i][0];
//       maxValueIndex = i;
//     }
//   }

//   const partial = [];
//   let currentIndex = maxValueIndex;
//   while (currentIndex !== -1) {
//     partial.push(seq[currentIndex]);
//     currentIndex = dp[currentIndex][1];
//   }

//   console.log(maxValue);
//   console.log(partial.reverse().join(" "));
// };

// solution(input);
