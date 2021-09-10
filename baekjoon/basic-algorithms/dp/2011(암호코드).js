// const INPUT_1 = ["25114"]; // 6
// const INPUT_2 = ["3240"]; // 0
// const INPUT_3 = ["3"];
// const INPUT_4 = ["15"];
// const INPUT_5 = ["101"]; // 1
// const INPUT_6 = ["10"]; // 1
// const INPUT_7 = ["1010"]; // 1
// const INPUT_8 = ["2626"]; // 4
// const INPUT_9 = [""];
// const INPUT_10 = ["1203"]; // 1

// const input = INPUT_7;

// // Solution
// function solution(input) {
//   // Variables
//   const pw = [0].concat(input[0].split("").map((e) => parseInt(e)));
//   const N = pw.length - 1;
//   const DIVS = 1000000;
//   const ALPH = 26;
//   let dp = new Array(N + 1).fill(1);

//   // Functions
//   function solve() {
//     if (N === 0) {
//       console.log(0);
//       return;
//     }
//     if (pw[1] === 0) {
//       console.log(0);
//       return;
//     }

//     // bottom-up
//     for (let i = 2; i < N + 1; i++) {
//       if (pw[i] === 0 && pw[i - 1] !== 1 && pw[i - 1] !== 2) {
//         console.log(0);
//         return;
//       }

//       const flag = pw[i - 1] * 10 + pw[i];
//       if (flag === 10 || flag === 20) dp[i] = dp[i - 2] % DIVS;
//       else if (flag < 10) dp[i] = dp[i - 1] % DIVS;
//       else if (flag <= ALPH) dp[i] = (dp[i - 1] + dp[i - 2]) % DIVS;
//       else dp[i] = dp[i - 1] % DIVS;
//     }

//     console.log(dp[N]);
//   }

//   // Run
//   solve();
// }

// solution(input);
