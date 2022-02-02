// const INPUT_1 = ["3 16"];

// const input = INPUT_1;

// const solution = (input) => {
//   const answer = [];
//   const [M, N] = input[0].split(" ").map(Number);
//   let isPrime = [null, false, ...new Array(N - 1).fill(true)];
//   for (let i = 2; i <= Math.sqrt(N); i++) {
//     if (isPrime[i]) {
//       for (let j = i + i; j <= N; j += i) {
//         isPrime[j] = false;
//       }
//     }
//   }
//   for (let i = M; i <= N; i++) {
//     if (isPrime[i]) answer.push(i);
//   }
//   console.log(answer.join("\n"));
// };

// solution(input);
