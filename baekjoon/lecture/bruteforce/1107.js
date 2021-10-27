// const INPUT_1 = ["5457", "3", "6 7 8"];

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const M = parseInt(input[1]);
//   let broken = new Array(10).fill(false);
//   if (M !== 0) {
//     const numbers = input[2].split(" ").map(Number);
//     numbers.forEach((n) => (broken[n] = true));
//   }
//   let length = 0;

//   // Functions
//   const isTeleportable = (num) => {
//     if (num === 0) {
//       if (broken[0]) return false;
//       else {
//         length = 1;
//         return true;
//       }
//     }
//     while (num > 0) {
//       if (broken[num % 10]) {
//         length = 0;
//         return false;
//       }
//       num = Math.floor(num / 10);
//       length++;
//     }
//     return true;
//   };

//   function solve() {
//     let answer = Math.abs(100 - N);
//     for (let i = 0; i < 1000000; i++) {
//       if (isTeleportable(i)) {
//         answer = Math.min(answer, Math.abs(N - i) + length);
//         length = 0;
//       }
//     }
//     console.log(answer);
//   }

//   // Run
//   solve();
// }

// solution(input);
