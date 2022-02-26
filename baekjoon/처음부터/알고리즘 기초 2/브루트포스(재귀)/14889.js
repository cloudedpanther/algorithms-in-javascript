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

// function getCurrentMatch(N, teamA, list) {
//   const teamB = [];
//   for (let i = 0; i < N; i++) {
//     if (!teamA.includes(i)) teamB.push(i);
//   }

//   let [powerA, powerB] = [0, 0];
//   for (let i = 0; i < N / 2 - 1; i++) {
//     for (let j = i + 1; j < N / 2; j++) {
//       const [a1, a2] = [teamA[i], teamA[j]];
//       const [b1, b2] = [teamB[i], teamB[j]];
//       powerA += list[a1][a2] + list[a2][a1];
//       powerB += list[b1][b2] + list[b2][b1];
//     }
//   }
//   return Math.abs(powerA - powerB);
// }

// function getBestMatch(N, index, start, teamA, list) {
//   if (index === N / 2) {
//     return getCurrentMatch(N, teamA, list);
//   }

//   let bestMatch = Infinity;
//   for (let i = start; i < N; i++) {
//     teamA.push(i);
//     bestMatch = Math.min(
//       bestMatch,
//       getBestMatch(N, index + 1, i + 1, teamA, list)
//     );
//     teamA.pop();
//   }
//   return bestMatch;
// }

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const list = Array.from({ length: N }, (_, idx) =>
//     input[idx + 1].split(" ").map(Number)
//   );
//   const teamA = [0];
//   const answer = getBestMatch(N, 1, 1, teamA, list);
//   console.log(answer);
// };

// solution(input);
