// const INPUT_1 = ["7", "3 10", "5 20", "1 10", "1 20", "2 15", "4 40", "2 200"];
// const INPUT_2 = [
//   "10",
//   "1 1",
//   "1 2",
//   "1 3",
//   "1 4",
//   "1 5",
//   "1 6",
//   "1 7",
//   "1 8",
//   "1 9",
//   "1 10",
// ];

// const input = INPUT_2;

// function getMaxExp(N, schedule, start) {
//   if (start >= N) return 0;

//   let maxExp = 0;
//   for (let i = start; i < N; i++) {
//     const [days, expenses] = schedule[i];
//     if (i + days <= N) {
//       const exp = expenses + getMaxExp(N, schedule, i + days);
//       maxExp = Math.max(maxExp, exp);
//     }
//   }
//   return maxExp;
// }

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const schedule = Array.from({ length: N }, (_, idx) =>
//     input[idx + 1].split(" ").map(Number)
//   );
//   const answer = getMaxExp(N, schedule, 0);
//   console.log(answer);
// };

// solution(input);
