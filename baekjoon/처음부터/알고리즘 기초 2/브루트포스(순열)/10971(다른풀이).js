// const INPUT_1 = ["4", "0 10 15 20", "5 0 9 10", "6 13 0 12", "8 8 9 0"];

// const input = INPUT_1;

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

// function swap(seq, a, b) {
//   const tmp = seq[a];
//   seq[a] = seq[b];
//   seq[b] = tmp;
// }

// function nextPermutation(N, seq) {
//   let i = N - 1;
//   while (seq[i - 1] > seq[i]) i--;
//   if (i === 0) return false;

//   let j = N - 1;
//   while (seq[i - 1] > seq[j]) j--;
//   swap(seq, i - 1, j);

//   j = N - 1;
//   while (i < j) {
//     swap(seq, i, j);
//     i++;
//     j--;
//   }
//   return true;
// }

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const list = Array.from({ length: N }, (_, idx) =>
//     input[idx + 1].split(" ").map(Number)
//   );
//   const seq = Array.from({ length: N }, (_, idx) => idx);
//   let answer = Infinity;

//   do {
//     const curExp = getExp(N, seq, list);
//     answer = Math.min(answer, curExp);
//   } while (nextPermutation(N, seq));

//   console.log(answer);
// };

// solution(input);
