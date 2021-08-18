// // N가지 종류의 동전을 가지고 있다.
// // 동전들을 활용해서 가치의 합이 K가 되도록 한다.

// const INPUT_1 = [
//   "10 4200",
//   "1",
//   "5",
//   "10",
//   "50",
//   "100",
//   "500",
//   "1000",
//   "5000",
//   "10000",
//   "50000",
// ];
// // expected output: 6

// const INPUT_2 = [
//   "10 4790",
//   "1",
//   "5",
//   "10",
//   "50",
//   "100",
//   "500",
//   "1000",
//   "5000",
//   "10000",
//   "50000",
// ];
// // expected output: 12

// const input = INPUT_2;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0].split(" ")[0]);
//   const K = parseInt(input[0].split(" ")[1]);

//   // Functions
//   function solve() {
//     let need = K;
//     let usedCoins = 0;

//     for (let i = N; i > 0; i--) {
//       const coinValue = parseInt(input[i]);

//       while (need >= coinValue) {
//         need -= coinValue;
//         usedCoins++;
//       }
//       if (need === 0) break;
//     }

//     console.log(usedCoins);
//   }

//   // Run
//   solve();
// }

// solution(input);
