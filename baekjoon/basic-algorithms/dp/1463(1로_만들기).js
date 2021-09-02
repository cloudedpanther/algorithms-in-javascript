// // 3으로 나눈다
// // 2로 나눈다
// // 1을 뺀다
// // 위 세가지 연산에서 골라 거듭해 1을 만든다
// // 가장 적게 한 연산의 횟수

// const INPUT_1 = ["2"]; // 1
// const INPUT_2 = ["10"]; // 3
// const INPUT_3 = ["1000000"];

// const input = INPUT_3;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   //   let memo = new Array(N + 1).fill(0);
//   const memo = [0, 0];

//   function solve() {
//     for (let i = 2; i <= N; i++) {
//       const nominees = [];
//       if (i % 3 === 0) nominees.push(memo[i / 3]);
//       if (i % 2 === 0) nominees.push(memo[i / 2]);
//       nominees.push(memo[i - 1]);

//       const best = Math.min(...nominees) + 1;
//       //   memo[i] = best;
//       memo.push(best);
//     }

//     console.log(memo[N]);
//   }

//   // Run
//   solve();
// }

// solution(input);
