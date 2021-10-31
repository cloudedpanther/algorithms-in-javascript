// const INPUT_1 = ["120"]; // 252
// const INPUT_2 = ["100000000"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const N = parseInt(input[0]);

//   // Functions
//   const getUnit = () => {
//     let num = N;
//     let unit = 0;
//     while (num > 0) {
//       num = Math.floor(num / 10);
//       unit++;
//     }
//     return unit;
//   };

//   const solve = () => {
//     const unit = getUnit();
//     let answer = 0;
//     if (unit === 1) {
//       console.log(N);
//       return;
//     } else {
//       for (let i = 1; i < unit; i++) {
//         const tmp = 9 * Math.pow(10, i - 1) * i;
//         answer += tmp;
//       }
//       const tmp = (N - parseInt("9".repeat(unit - 1))) * unit;
//       answer += tmp;
//       console.log(answer);
//     }
//   };

//   // Run
//   solve();
// };

// solution(input);
