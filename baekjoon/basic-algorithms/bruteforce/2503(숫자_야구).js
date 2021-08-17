// // 세 자리 숫자 야구를 한다.
// // 물음과 답을 통해 유추해낼 수 있는 숫자의 경우의 수를 출력한다.

// const INPUT_1 = ["4", "123 1 1", "356 1 0", "327 2 0", "489 0 1"]; // output: 2

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);

//   // Functions
//   function isNominee(num_1, num_2, num_3) {
//     for (let i = 1; i <= N; i++) {
//       const inputLine = input[i].split(" ");
//       const guess = inputLine[0].split("").map((e) => parseInt(e));
//       const guessStrikes = Number(inputLine[1]);
//       const guessBalls = Number(inputLine[2]);

//       // count strikes
//       let strikes = 0;
//       if (num_1 === guess[0]) strikes++;
//       if (num_2 === guess[1]) strikes++;
//       if (num_3 === guess[2]) strikes++;

//       if (strikes !== guessStrikes) return 0;

//       // count balls
//       let balls = 0;
//       if (num_1 === guess[1] || num_1 === guess[2]) balls++;
//       if (num_2 === guess[0] || num_2 === guess[2]) balls++;
//       if (num_3 === guess[0] || num_3 === guess[1]) balls++;

//       if (balls !== guessBalls) return 0;
//     }

//     return 1;
//   }

//   function solve() {
//     let answer = 0;

//     for (let i = 1; i <= 9; i++) {
//       for (let j = 1; j <= 9; j++) {
//         for (let k = 1; k <= 9; k++) {
//           if (i === j || i === k || j === k) continue;
//           if (isNominee(i, j, k)) answer++;
//         }
//       }
//     }

//     console.log(answer);
//   }

//   solve();
// }

// solution(input);
