// const INPUT_1 = ["8", "20", "42", "0"];

// const input = INPUT_1;

// const solution = (input) => {
//   const answer = [];
//   const numbers = input.slice(0, -1).map(Number);
//   const MAX = Math.max(...numbers);
//   let isPrime = [null, false, ...new Array(MAX - 1).fill(true)];
//   for (let i = 2; i <= Math.sqrt(MAX); i++) {
//     if (isPrime[i]) {
//       for (let j = i + i; j <= MAX; j += i) {
//         isPrime[j] = false;
//       }
//     }
//   }

//   for (const num of numbers) {
//     for (let i = 2; i <= Math.floor(num / 2); i++) {
//       if (isPrime[i] && isPrime[num - i]) {
//         answer.push(`${num} = ${i} + ${num - i}`);
//         break;
//       }
//     }
//   }
//   console.log(answer.join("\n"));
// };

// solution(input);
