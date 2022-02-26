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

// function getCurrentMatch(N, team, list) {
//   const t1 = [];
//   const t2 = [];
//   for (let i = 0; i < N; i++) {
//     if (team[i]) t1.push(i);
//     else t2.push(i);
//   }

//   let [p1, p2] = [0, 0];
//   for (let i = 0; i < N / 2 - 1; i++) {
//     for (let j = i + 1; j < N / 2; j++) {
//       p1 += list[t1[i]][t1[j]] + list[t1[j]][t1[i]];
//       p2 += list[t2[i]][t2[j]] + list[t2[j]][t2[i]];
//     }
//   }
//   return Math.abs(p1 - p2);
// }

// function getBestMatch(N, index, start, team, list) {
//   if (index === N / 2) {
//     return getCurrentMatch(N, team, list);
//   }

//   let bestMatch = Infinity;
//   for (let i = start; i < N; i++) {
//     team[i] = 1;
//     bestMatch = Math.min(
//       bestMatch,
//       getBestMatch(N, index + 1, i + 1, team, list)
//     );
//     team[i] = 0;
//   }
//   return bestMatch;
// }

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const list = Array.from({ length: N }, (_, idx) =>
//     input[idx + 1].split(" ").map(Number)
//   );
//   const team = [1, ...new Array(N - 1).fill(0)];
//   const answer = getBestMatch(N, 1, 1, team, list);
//   console.log(answer);
// };

// solution(input);
