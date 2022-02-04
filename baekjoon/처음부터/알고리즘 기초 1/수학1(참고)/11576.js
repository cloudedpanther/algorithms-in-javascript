// const INPUT_1 = ["17 8", "2", "2 16"];

// const input = INPUT_1;

// function toDecimal(origin, A) {
//   let result = 0;
//   for (let i = 0; i < origin.length; i++) {
//     result += origin[i] * Math.pow(A, i);
//   }
//   return result;
// }

// function convert(decimal, B) {
//   const stack = [];
//   while (decimal > 0) {
//     stack.push(decimal % B);
//     decimal = Math.floor(decimal / B);
//   }
//   return stack.reverse().join(" ");
// }

// const solution = (input) => {
//   const [A, B] = input[0].split(" ").map(Number);
//   const origin = input[2].split(" ").map(Number).reverse();
//   const decimal = toDecimal(origin, A);
//   const answer = convert(decimal, B);
//   console.log(answer);
// };

// solution(input);
