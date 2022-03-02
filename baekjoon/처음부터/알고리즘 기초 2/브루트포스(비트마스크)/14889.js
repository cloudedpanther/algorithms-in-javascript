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
//   let powerGap = Infinity;

//   for (let i = 1; i < 1 << N; i++) {
//     powerGap = Math.min(powerGap, getPowerGap(i));
//   }

//   console.log(powerGap);

//   function getPowerGap(person) {
//     if (person & 1) return Infinity;

//     let [t1, t2] = [[], []];
//     for (let i = 0; i < N; i++) {
//       if (person & (1 << i)) t1.push(i);
//       else t2.push(i);
//     }
//     if (t1.length !== N / 2) return Infinity;

//     let [p1, p2] = [0, 0];
//     for (let i = 0; i < N / 2 - 1; i++) {
//       for (let j = i + 1; j < N / 2; j++) {
//         p1 += strength[t1[i]][t1[j]] + strength[t1[j]][t1[i]];
//         p2 += strength[t2[i]][t2[j]] + strength[t2[j]][t2[i]];
//       }
//     }
//     return Math.abs(p1 - p2);
//   }
// };

// solution(input);
