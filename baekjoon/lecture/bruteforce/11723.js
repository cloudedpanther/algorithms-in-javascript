// const INPUT_1 = [
//   "26",
//   "add 1",
//   "add 2",
//   "check 1",
//   "check 2",
//   "check 3",
//   "remove 2",
//   "check 1",
//   "check 2",
//   "toggle 3",
//   "check 1",
//   "check 2",
//   "check 3",
//   "check 4",
//   "all",
//   "check 10",
//   "check 20",
//   "toggle 10",
//   "remove 20",
//   "check 10",
//   "check 20",
//   "empty",
//   "check 1",
//   "toggle 1",
//   "check 1",
//   "toggle 1",
//   "check 1",
// ];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   let S = 0;

//   // Functions
//   const calc = (input) => {
//     const cmd = input.split(" ")[0];
//     const num = input.length > 1 ? input.split(" ")[1] : null;
//     if (cmd === "add") {
//       S = S | (1 << (num - 1));
//     } else if (cmd === "remove") {
//       S = S & ~(1 << (num - 1));
//     } else if (cmd === "check") {
//       const flag = S & (1 << (num - 1));
//       if (flag === 0) {
//         console.log(0);
//       } else {
//         console.log(1);
//       }
//     } else if (cmd === "toggle") {
//       S = S ^ (1 << (num - 1));
//     } else if (cmd === "all") {
//       S = (1 << 20) - 1;
//     } else if (cmd === "empty") {
//       S = 0;
//     }
//   };

//   const solve = () => {
//     const M = Number(input[0]);
//     for (let i = 1; i <= M; i++) {
//       calc(input[i]);
//       console.log(input[i]);
//       console.log("S: ", S);
//     }
//   };

//   // Run
//   solve();
// };

// solution(input);
