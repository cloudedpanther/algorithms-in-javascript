// const INPUT_1 = [
//   "6",
//   "0 1 2 3 4 5",
//   "1 0 2 3 4 5",
//   "1 2 0 3 4 5",
//   "1 2 3 0 4 5",
//   "1 2 3 4 0 5",
//   "1 2 3 4 5 0",
// ];

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const strength = Array.from({ length: N }, (_, idx) =>
//     input[idx + 1].split(" ").map(Number)
//   );
//   const team = [true, ...new Array(N - 1).fill(false)];
//   const answer = getBestMatch(1, 1);
//   console.log(answer);

//   function getCurrentMatch() {
//     const t1 = [];
//     const t2 = [];
//     for (let i = 0; i < N; i++) {
//       if (team[i]) t1.push(i);
//       else t2.push(i);
//     }

//     let [p1, p2] = [0, 0];
//     for (let i = 0; i < t1.length - 1; i++) {
//       for (let j = i + 1; j < t1.length; j++) {
//         p1 += strength[t1[i]][t1[j]] + strength[t1[j]][t1[i]];
//       }
//     }
//     for (let i = 0; i < t2.length - 1; i++) {
//       for (let j = i + 1; j < t2.length; j++) {
//         p2 += strength[t2[i]][t2[j]] + strength[t2[j]][t2[i]];
//       }
//     }
//     return Math.abs(p1 - p2);
//   }

//   function getBestMatch(index, start) {
//     let bestMatch = getCurrentMatch();

//     if (index === N - 1) return bestMatch;

//     for (let i = start; i < N; i++) {
//       team[i] = true;
//       const match = getBestMatch(index + 1, i + 1);
//       bestMatch = Math.min(bestMatch, match);
//       team[i] = false;
//     }
//     return bestMatch;
//   }
// };

// solution(input);
