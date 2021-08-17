// // 8*8 크기로 자를 수 있는 체스판의 경우를 모두 테스트한다.
// // 홀수 행과 짝수 행을 나눠서 칠해야 하는 칸의 개수를 구한다.
// // 칸의 개수가 18보다 크면 64에서 뺀 수를 반환한다.

// const INPUT_1 = [
//   "8 8",
//   "WBWBWBWB",
//   "BWBWBWBW",
//   "WBWBWBWB",
//   "BWBBBWBW",
//   "WBWBWBWB",
//   "BWBWBWBW",
//   "WBWBWBWB",
//   "BWBWBWBW",
// ]; // output: 1
// const INPUT_2 = [
//   "10 13",
//   "BBBBBBBBWBWBW",
//   "BBBBBBBBBWBWB",
//   "BBBBBBBBWBWBW",
//   "BBBBBBBBBWBWB",
//   "BBBBBBBBWBWBW",
//   "BBBBBBBBBWBWB",
//   "BBBBBBBBWBWBW",
//   "BBBBBBBBBWBWB",
//   "WWWWWWWWWWBWB",
//   "WWWWWWWWWWBWB",
// ]; // output: 12

// const input = INPUT_2;

// // Solution
// function solution(input) {
//   // Variables
//   const NUMBER_OF_BLOCKS = 64;
//   const N = parseInt(input[0].split(" ")[0]);
//   const M = parseInt(input[0].split(" ")[1]);

//   // Functions
//   function countBlocksToPaint(startH, startV) {
//     const boardType = (startH + startV) % 2;
//     let blocksToPaint = 0;

//     for (let i = startH; i < startH + 8; i++) {
//       for (let j = startV; j < startV + 8; j++) {
//         const currentBlock = input[i][j];
//         const blockType = (i + j) % 2;
//         if (blockType === boardType) {
//           if (currentBlock === "B") blocksToPaint++;
//         } else {
//           if (currentBlock === "W") blocksToPaint++;
//         }
//       }
//     }

//     return blocksToPaint > NUMBER_OF_BLOCKS / 2
//       ? NUMBER_OF_BLOCKS - blocksToPaint
//       : blocksToPaint;
//   }

//   function solve() {
//     let answer = NUMBER_OF_BLOCKS / 2;
//     for (let i = 1; i <= N - 7; i++) {
//       for (let j = 0; j < M - 7; j++) {
//         const counted = countBlocksToPaint(i, j);
//         if (counted < answer) answer = counted;
//       }
//     }

//     console.log(answer);
//   }

//   // Run
//   solve();
// }

// solution(input);
