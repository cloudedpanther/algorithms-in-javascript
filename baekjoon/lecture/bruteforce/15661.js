// const INPUT_1 = ["4", "0 1 2 3", "4 0 5 6", "7 1 0 2", "3 4 5 0"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const N = parseInt(input[0]);
//   let S = new Array(N);
//   for (let i = 0; i < N; i++) {
//     S[i] = input[i + 1].split(" ").map(Number);
//   }

//   // Functions
//   const getPower = (team) => {
//     let power = 0;
//     for (let i = 0; i < team.length; i++) {
//       for (let j = 0; j < team.length; j++) {
//         power += S[team[i]][team[j]];
//       }
//     }
//     return power;
//   };

//   const go = (index, a, b) => {
//     if (index === N) {
//       if (a.length === 0 || b.length === 0) return -1;
//       const aP = getPower(a);
//       const bP = getPower(b);
//       const diff = Math.abs(aP - bP);
//       return diff;
//     }
//     let diff = -1;
//     const newA = a.concat(index);
//     const d1 = go(index + 1, newA, b);
//     if (diff === -1 || (d1 > -1 && d1 < diff)) diff = d1;
//     const newB = b.concat(index);
//     const d2 = go(index + 1, a, newB);
//     if (diff === -1 || (d2 > -1 && d2 < diff)) diff = d2;
//     return diff;
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
