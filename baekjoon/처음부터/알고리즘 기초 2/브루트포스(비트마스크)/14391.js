// const INPUT_1 = ["4 3", "001", "010", "111", "100"];
// const INPUT_2 = ["2 3", "123", "312"];

// const input = INPUT_1;

// const solution = (input) => {
//   const [N, M] = input[0].split(" ").map(Number);
//   const board = Array.from({ length: N }, (_, idx) => input[idx + 1].split(""));
//   let maxSum = 0;

//   for (let i = 0; i < 1 << (N * M); i++) {
//     maxSum = Math.max(maxSum, getSumValue(i));
//   }

//   console.log(maxSum);

//   function getSumValue(direction) {
//     let sum = 0;

//     for (let i = 0; i < N; i++) {
//       let relayH = "";
//       for (let j = 0; j < M; j++) {
//         if (direction & (1 << (i * M + j))) relayH += board[i][j];
//         else {
//           sum += Number(relayH);
//           relayH = "";
//         }
//       }
//       sum += Number(relayH);
//     }

//     for (let i = 0; i < M; i++) {
//       let relayV = "";
//       for (let j = 0; j < N; j++) {
//         if (!(direction & (1 << (j * M + i)))) relayV += board[j][i];
//         else {
//           sum += Number(relayV);
//           relayV = "";
//         }
//       }
//       sum += Number(relayV);
//     }

//     return sum;
//   }
// };

// solution(input);
