// const INPUT_1 = ["4", "3 5 2 7"];
// const INPUT_2 = ["4", "9 5 4 8"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const numbers = input[1].split(" ").map(Number);
//   let NGE = new Array(N);

//   const stack = [];
//   for (let i = N - 1; i >= 0; i--) {
//     const num = numbers[i];
//     while (1) {
//       const top = stack[stack.length - 1];
//       if (stack.length === 0) {
//         NGE[i] = -1;
//         break;
//       } else {
//         if (top > num) {
//           NGE[i] = top;
//           break;
//         } else {
//           stack.pop();
//         }
//       }
//     }
//     stack.push(num);
//   }

//   const answer = NGE.join(" ");
//   console.log(answer);
// };

// solution(input);
