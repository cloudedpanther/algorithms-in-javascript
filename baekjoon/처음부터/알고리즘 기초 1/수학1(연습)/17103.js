// const INPUT_1 = ["5", "6", "8", "10", "12", "100"];

// const input = INPUT_1;

// const solution = (input) => {
//   const answer = [];
//   const numbers = input.slice(1).map(Number);
//   const MAX = Math.max(...numbers);
//   let isPrime = [null, false, ...new Array(MAX - 1).fill(true)];
//   for (let i = 2; i <= Math.sqrt(MAX); i++) {
//     if (isPrime[i]) {
//       for (let j = i + i; j <= MAX; j += i) {
//         isPrime[j] = false;
//       }
//     }
//   }
//   numbers.forEach((num) => {
//     let partition = 0;
//     for (let i = 2; i <= Math.floor(num / 2); i++) {
//       if (isPrime[i] && isPrime[num - i]) partition++;
//     }
//     answer.push(partition);
//   });
//   console.log(answer.join("\n"));
// };

// solution(input);
