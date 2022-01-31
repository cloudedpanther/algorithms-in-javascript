// const INPUT_1 = ["5", "ABC*+DE/-", "1", "2", "3", "4", "5"];
// const INPUT_2 = ["1", "AA+A+", "1"];

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const expression = input[1];
//   const numbers = input.slice(2).map(Number);
//   const alphabet = {};
//   for (let i = 0; i < N; i++) {
//     alphabet[String.fromCharCode(i + 65)] = numbers[i];
//   }
//   const stack = [];
//   for (const exp of expression) {
//     switch (exp) {
//       case "+":
//       case "-":
//       case "*":
//       case "/":
//         const latter = stack.pop();
//         const former = stack.pop();
//         const result = new Function("return " + former + exp + latter)();
//         stack.push(result);
//         break;
//       default:
//         stack.push(alphabet[exp]);
//     }
//   }
//   const answer = stack.pop().toFixed(2);
//   console.log(answer);
// };

// solution(input);
