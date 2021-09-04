// // 1 x 2 과 2 x 1 타일로 2 x n 구역 채우기
// // 채우는 방법의 수를 10007로 나눈 수를 반환

// const INPUT_1 = ["2"]; // 2
// const INPUT_2 = ["9"]; // 55
// const INPUT_3 = ["5"];
// const INPUT_4 = ["1000"];

// const input = INPUT_4;

// // Solution
// function solution(input) {
//   // Variables
//   const n = parseInt(input[0]);
//   const DIV_NUM = 10007;
//   let dp = new Array(n + 1).fill(0);

//   // Functions
//   function solve() {
//     // initialzie variables
//     dp[1] = 1;
//     dp[2] = 2;

//     for (let i = 1; i < n - 1; i++) {
//       dp[i + 2] = (dp[i] + dp[i + 1]) % DIV_NUM;
//     }

//     // return
//     console.log(dp[n]);
//   }

//   // Run
//   solve();
// }

// solution(input);
