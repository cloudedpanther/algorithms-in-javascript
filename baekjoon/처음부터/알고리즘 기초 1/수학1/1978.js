// const INPUT_1 = ["4", "1 3 5 7"];

// const input = INPUT_1;

// const solution = (input) => {
//   const numbers = input[1]
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b);
//   const biggest = numbers[numbers.length - 1];
//   let isPrime = [null, false, ...new Array(biggest - 1).fill(true)];
//   let answer = 0;

//   for (let i = 2; i <= Math.sqrt(biggest); i++) {
//     if (isPrime[i]) {
//       for (let j = i + i; j <= biggest; j += i) {
//         isPrime[j] = false;
//       }
//     }
//   }

//   numbers.forEach((n) => {
//     if (isPrime[n]) answer++;
//   });

//   console.log(answer);
// };

// solution(input);
