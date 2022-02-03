// const INPUT_1 = ["3", "4 10 20 30 40", "3 7 5 12", "3 125 15 25"];

// const input = INPUT_1;

// function gcd(a, b) {
//   while (a % b !== 0) {
//     const tmp = a % b;
//     a = b;
//     b = tmp;
//   }
//   return b;
// }

// const solution = (input) => {
//   const answer = [];
//   for (const numbers of input.slice(1).map((e) =>
//     e
//       .split(" ")
//       .slice(1)
//       .map(Number)
//       .sort((a, b) => a - b)
//   )) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length - 1; i++) {
//       for (let j = i + 1; j < numbers.length; j++) {
//         sum += gcd(numbers[i], numbers[j]);
//       }
//     }
//     answer.push(sum);
//   }
//   console.log(answer.join("\n"));
// };

// solution(input);
