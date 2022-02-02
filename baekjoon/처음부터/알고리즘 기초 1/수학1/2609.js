// const INPUT_1 = ["24 18"];

// const input = INPUT_1;

// const solution = (input) => {
//   const [n1, n2] = input[0]
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b);
//   let gcd = 1;
//   let lcm = n1 * n2;

//   for (let i = n1; i > 0; i--) {
//     if (n1 % i === 0 && n2 % i === 0) {
//       gcd = i;
//       lcm = (n1 * n2) / gcd;
//       break;
//     }
//   }
//   console.log(gcd);
//   console.log(lcm);
// };

// solution(input);
