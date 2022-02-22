// const INPUT_1 = ["6", "20 1 15 8 4 10"];

// const input = INPUT_1;

// function getSeqSum(N, seq, numbers) {
//   seq = [...seq].map((idx) => numbers[idx]);
//   let sum = 0;
//   for (let i = 0; i < N - 1; i++) {
//     sum += Math.abs(seq[i] - seq[i + 1]);
//   }
//   return sum;
// }

// function getMaxSeqSum(N, index, seq, numbers) {
//   if (index === N) {
//     return getSeqSum(N, seq, numbers);
//   }

//   let max = -2000;

//   for (let i = 0; i < N; i++) {
//     if (!seq.has(i)) {
//       seq.add(i);
//       max = Math.max(max, getMaxSeqSum(N, index + 1, seq, numbers));
//       seq.delete(i);
//     }
//   }

//   return max;
// }

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const numbers = input[1]
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b);
//   const seq = new Set();
//   const answer = getMaxSeqSum(N, 0, seq, numbers);
//   console.log(answer);
// };

// solution(input);
