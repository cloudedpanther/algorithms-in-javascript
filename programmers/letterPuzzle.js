// function solution(strs, t) {
//   const dp = Array.from({ length: t.length + 1 }, () => -1);
//   const strsSet = new Set(strs);

//   dp[0] = 0;
//   for (let i = 1; i < t.length + 1; i++) {
//     for (let j = Math.max(0, i - 5); j < i; j++) {
//       const lackString = t.slice(j, i);
//       if (strsSet.has(lackString)) {
//         if (dp[j] !== -1 && (dp[i] === -1 || dp[i] > dp[j] + 1))
//           dp[i] = dp[j] + 1;
//       }
//     }
//   }

//   return dp[t.length];
// }
// const answer1 = solution(["ba", "na", "n", "a"], "banana");
// // const answer2 = solution(["app", "ap", "p", "l", "e", "ple", "pp"], "apple");
// // const answer3 = solution(["ba", "an", "nan"], "banana");

// console.log(answer1);
