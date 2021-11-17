// const INPUT_1 = ["4", "0 1 2 3", "4 0 5 6", "7 1 0 2", "3 4 5 0"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const N = parseInt(input[0]);
//   const S = new Array(N);
//   for (let i = 0; i < N; i++) {
//     S[i] = input[i + 1].split(" ").map(Number);
//   }

//   // Functions
//   const go = (index, teamA, teamB) => {
//     if (index === N) {
//       let aPower = 0;
//       let bPower = 0;
//       for (let i = 0; i < N / 2; i++) {
//         for (let j = 0; j < N / 2; j++) {
//           if (i === j) continue;
//           aPower += S[teamA[i]][teamA[j]];
//           bPower += S[teamB[i]][teamB[j]];
//         }
//       }
//       const diff = Math.abs(aPower - bPower);
//       return diff;
//     }
//     let answer = -1;
//     if (teamA.length < N / 2) {
//       const newA = teamA.concat(index);
//       const diff1 = go(index + 1, newA, teamB);
//       if (answer === -1 || diff1 < answer) answer = diff1;
//     }
//     if (teamB.length < N / 2) {
//       const newB = teamB.concat(index);
//       const diff2 = go(index + 1, teamA, newB);
//       if (answer === -1 || diff2 < answer) answer = diff2;
//     }
//     return answer;
//   };

//   const solve = () => {
//     const teamA = [];
//     const teamB = [];
//     const answer = go(0, teamA, teamB);
//     console.log(answer);
//   };

//   // Run
//   solve();
// };

// solution(input);
