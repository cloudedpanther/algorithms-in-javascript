// const INPUT_1 = ["4", "0 10 15 20", "5 0 9 10", "6 13 0 12", "8 8 9 0"];

// const input = INPUT_1;

// // 순열을 만든다
// // 비용을 더한다
// // 최소값을 갱신한다

// function getExp(N, seq, list) {
//   let exp = 0;
//   for (let i = 0; i < N; i++) {
//     const from = seq[i];
//     const to = seq[(i + 1) % N];
//     const cur = list[from][to];
//     if (cur === 0) return Infinity;
//     exp += cur;
//   }
//   return exp;
// }

// function getMinExp(N, index, seq, list) {
//   if (index === N) {
//     return getExp(N, [...seq], list);
//   }

//   let minExp = Infinity;

//   for (let i = 0; i < N; i++) {
//     if (!seq.has(i)) {
//       seq.add(i);
//       const cur = getMinExp(N, index + 1, seq, list);
//       minExp = Math.min(minExp, cur);
//       seq.delete(i);
//     }
//   }

//   return minExp;
// }

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const list = Array.from({ length: N }, (_, idx) =>
//     input[idx + 1].split(" ").map(Number)
//   );
//   const seq = new Set();
//   const answer = getMinExp(N, 0, seq, list);
//   console.log(answer);
// };

// solution(input);
