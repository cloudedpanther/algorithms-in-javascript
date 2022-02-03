// const INPUT_1 = ["3 81", "33 105 57"];

// const input = INPUT_1;

// function getGcd(a, b) {
//   while (a % b !== 0) {
//     const tmp = a % b;
//     a = b;
//     b = tmp;
//   }
//   return b;
// }

// const solution = (input) => {
//   const [_, S] = input[0].split(" ").map(Number);
//   const numbers = input[1]
//     .split(" ")
//     .map((n) => Math.abs(parseInt(n) - S))
//     .sort((a, b) => a - b);
//   let gcd = numbers[0];
//   for (const num of numbers.slice(1)) {
//     gcd = getGcd(num, gcd);
//     if (gcd === 1) break;
//   }
//   console.log(gcd);
// };

// solution(input);
