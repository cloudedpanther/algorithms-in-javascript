// const INPUT_1 = ["4", "-+0++++--+"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const N = parseInt(input[0]);
//   const sign = input[1].split("");
//   const S = new Array(N);
//   let start = 0;
//   for (let i = 0; i < N; i++) {
//     S[i] = new Array(N);
//     for (let j = i; j < N; j++) {
//       S[i][j] = sign[start];
//       start++;
//     }
//   }
//   let answer = new Array(N);

//   // Functions
//   const fits = (index) => {
//     let sum = 0;
//     for (let i = index; i >= 0; i--) {
//       sum += answer[i];
//       const flag = S[i][index];
//       if (flag === "-") {
//         if (sum >= 0) return false;
//       } else if (flag === "0") {
//         if (sum !== 0) return false;
//       } else if (flag === "+") {
//         if (sum <= 0) return false;
//       }
//     }
//     return true;
//   };

//   const go = (index) => {
//     if (index === N) {
//       console.log(answer.join(" "));
//       process.exit();
//     }
//     const curSign = S[index][index];
//     if (curSign === "0") {
//       answer[index] = 0;
//       if (fits(index)) go(index + 1);
//       return;
//     }
//     for (let i = 1; i <= 10; i++) {
//       answer[index] = curSign === "+" ? i : -1 * i;
//       if (fits(index)) go(index + 1);
//     }
//     return;
//   };

//   const solve = () => {
//     go(0);
//   };

//   // Run
//   solve();
// };

// solution(input);
