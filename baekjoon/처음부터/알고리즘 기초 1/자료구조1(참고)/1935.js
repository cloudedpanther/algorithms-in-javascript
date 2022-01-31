// const INPUT_1 = ["5", "ABC*+DE/-", "1", "2", "3", "4", "5"];
// const INPUT_2 = ["1", "AA+A+", "1"];

// const input = INPUT_2;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const expression = input[1];
//   const numbers = input.slice(2).map(Number);
//   const alphabet = {};
//   for (let i = 0; i < N; i++) {
//     alphabet[String.fromCharCode(i + 65)] = numbers[i];
//   }
//   const stack = [];
//   for (const char of expression) {
//     const ascii = char.charCodeAt(0);
//     if (ascii >= 65 && ascii <= 90) {
//       stack.push(alphabet[char]);
//     } else {
//       const latter = stack.pop();
//       const former = stack.pop();
//       if (char === "+") stack.push(former + latter);
//       else if (char === "-") stack.push(former - latter);
//       else if (char === "*") stack.push(former * latter);
//       else stack.push(former / latter);
//     }
//   }
//   const answer = stack.pop().toFixed(2);
//   console.log(answer);
// };

// solution(input);
