// // 연속하는 P일 중에 L일만 사용 가능한 캠핑장.
// // V일 간의 휴가 중 사용할 수 있는 최대 일수는?
// // V = PX + Y
// // Y가 l보다 작다면: campingDays = X * L + Y
// // Y가 l보다 크다면: campingDays = X * L + L = (X + 1) * L)
// // 맨 마지막에는 '0 0 0'이 주어진다.

// const INPUT_1 = ["5 8 20", "5 8 17", "0 0 0"];
// // expected output:
// // Case 1: 14
// // Case 2: 11
// const INPUT_2 = ["2 8 20", "0 0 0"];
// // expected output:
// // Case 1: 6

// const INPUT_3 = ["10 100 100000", "123 456 789", "0 0 0"];
// // expected output:
// // Case 1: 10000
// // Case 2: 246

// const input = INPUT_3;

// // Solution
// function solution(input) {
//   // Functions
//   function solve() {
//     for (let i = 0; i < input.length - 1; i++) {
//       // Variables
//       const newCase = input[i].split(" ");
//       const L = parseInt(newCase[0]);
//       const P = parseInt(newCase[1]);
//       const V = parseInt(newCase[2]);

//       const X = Math.floor(V / P);
//       const Y = V % P;

//       const campingDays = Y < L ? X * L + Y : (X + 1) * L;

//       console.log(`Case ${i + 1}: ${campingDays}`);
//     }
//   }

//   // Run
//   solve();
// }

// solution(input);
