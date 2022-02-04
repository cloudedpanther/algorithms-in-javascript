// const INPUT_1 = ["60466175 36"];

// const input = INPUT_1;

// const solution = (input) => {
//   const [N, B] = input[0].split(" ").map(Number);
//   const stack = [];
//   let num = N;
//   while (num > 0) {
//     const rem = num % B;
//     const bit = rem < 10 ? rem : String.fromCharCode(rem + 55);
//     stack.push(bit);
//     num = Math.floor(num / B);
//   }
//   console.log(stack.reverse().join(""));
// };

// solution(input);
