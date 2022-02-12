// const INPUT_1 = [
//   "5 5",
//   "1 2 3 4 5",
//   "5 4 3 2 1",
//   "2 3 4 5 6",
//   "6 5 4 3 2",
//   "1 2 1 2 1",
// ];

// const input = INPUT_1;

// const solution = (input) => {
//   const [N, M] = input[0].split(" ").map(Number);
//   const board = Array.from({ length: N }, (_, idx) =>
//     input[idx + 1].split(" ").map(Number)
//   );
//   let answer = -1;

//   // 막대기 가로
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j + 3 < M; j++) {
//       let sum = 0;
//       for (let k = 0; k < 4; k++) {
//         sum += board[i][j + k];
//       }
//       answer = Math.max(answer, sum);
//     }
//   }

//   // 막대기 세로
//   for (let i = 0; i + 3 < N; i++) {
//     for (let j = 0; j < M; j++) {
//       let sum = 0;
//       for (let k = 0; k < 4; k++) {
//         sum += board[i + k][j];
//       }
//       answer = Math.max(answer, sum);
//     }
//   }

//   // 상자
//   for (let i = 0; i + 1 < N; i++) {
//     for (let j = 0; j + 1 < M; j++) {
//       let sum = 0;
//       for (let s = 0; s < 2; s++) {
//         for (let k = 0; k < 2; k++) {
//           sum += board[i + s][j + k];
//         }
//       }
//       answer = Math.max(answer, sum);
//     }
//   }

//   // 지팡이 세로
//   for (let i = 0; i + 2 < N; i++) {
//     // 왼쪽으로 손잡이
//     for (let j = 1; j < M; j++) {
//       let sum = 0;
//       for (let k = 0; k < 3; k++) {
//         sum += board[i + k][j];
//       }
//       // 위 손잡이
//       answer = Math.max(answer, sum + board[i][j - 1]);
//       //아래 손잡이
//       answer = Math.max(answer, sum + board[i + 2][j - 1]);
//     }
//     // 오른쪽으로 손잡이
//     for (let j = 0; j + 1 < M; j++) {
//       let sum = 0;
//       for (let k = 0; k < 3; k++) {
//         sum += board[i + k][j];
//       }
//       // 위 손잡이
//       answer = Math.max(answer, sum + board[i][j + 1]);
//       //아래 손잡이
//       answer = Math.max(answer, sum + board[i + 2][j + 1]);
//     }
//   }

//   // 지팡이 가로
//   for (let j = 0; j + 2 < M; j++) {
//     // 위쪽으로 손잡이
//     for (let i = 1; i < N; i++) {
//       let sum = 0;
//       for (let k = 0; k < 3; k++) {
//         sum += board[i][j + k];
//       }
//       // 왼 손잡이
//       answer = Math.max(answer, sum + board[i - 1][j]);
//       // 오른 손잡이
//       answer = Math.max(answer, sum + board[i - 1][j + 2]);
//     }
//     // 아래쪽으로 손잡이
//     for (let i = 0; i + 1 < N; i++) {
//       let sum = 0;
//       for (let k = 0; k < 3; k++) {
//         sum += board[i][j + k];
//       }
//       // 왼 손잡이
//       answer = Math.max(answer, sum + board[i + 1][j]);
//       // 오른 손잡이
//       answer = Math.max(answer, sum + board[i + 1][j + 2]);
//     }
//   }

//   // 번개 세로
//   for (let i = 0; i + 2 < N; i++) {
//     // 왼쪽 굽이
//     for (let j = 1; j < M; j++) {
//       let sum = 0;
//       for (let s = 0; s < 2; s++) {
//         for (let k = 0; k < 2; k++) {
//           sum += board[i + s + k][j - s];
//         }
//       }
//       answer = Math.max(answer, sum);
//     }
//     // 오른쪽 굽이
//     for (let j = 0; j + 1 < M; j++) {
//       let sum = 0;
//       for (let s = 0; s < 2; s++) {
//         for (let k = 0; k < 2; k++) {
//           sum += board[i + s + k][j + s];
//         }
//       }
//       answer = Math.max(answer, sum);
//     }
//   }

//   // 번개 가로
//   for (let j = 0; j + 2 < M; j++) {
//     // 위쪽 굽이
//     for (let i = 1; i < N; i++) {
//       let sum = 0;
//       for (let s = 0; s < 2; s++) {
//         for (let k = 0; k < 2; k++) {
//           sum += board[i - s][j + s + k];
//         }
//       }
//       answer = Math.max(answer, sum);
//     }
//     // 아래쪽 굽이
//     for (let i = 0; i + 1 < N; i++) {
//       let sum = 0;
//       for (let s = 0; s < 2; s++) {
//         for (let k = 0; k < 2; k++) {
//           sum += board[i + s][j + s + k];
//         }
//       }
//       answer = Math.max(answer, sum);
//     }
//   }

//   // 오리발 세로
//   for (let i = 0; i + 2 < N; i++) {
//     // 왼쪽 솟음
//     for (let j = 1; j < M; j++) {
//       let sum = 0;
//       for (let k = 0; k < 3; k++) {
//         sum += board[i + k][j];
//       }
//       sum += board[i + 1][j - 1];
//       answer = Math.max(answer, sum);
//     }
//     // 오른쪽 솟음
//     for (let j = 0; j + 1 < M; j++) {
//       let sum = 0;
//       for (let k = 0; k < 3; k++) {
//         sum += board[i + k][j];
//       }
//       sum += board[i + 1][j + 1];
//       answer = Math.max(answer, sum);
//     }
//   }

//   // 오리발 가로
//   for (let j = 0; j + 2 < M; j++) {
//     // 위쪽 솟음
//     for (let i = 1; i < N; i++) {
//       let sum = 0;
//       for (let k = 0; k < 3; k++) {
//         sum += board[i][j + k];
//       }
//       sum += board[i - 1][j + 1];
//       answer = Math.max(answer, sum);
//     }
//     // 아래쪽 솟음
//     for (let i = 0; i + 1 < N; i++) {
//       let sum = 0;
//       for (let k = 0; k < 3; k++) {
//         sum += board[i][j + k];
//       }
//       sum += board[i + 1][j + 1];
//       answer = Math.max(answer, sum);
//     }
//   }

//   console.log(answer);
// };

// solution(input);
