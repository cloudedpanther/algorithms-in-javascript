// // 하나의 회의실이 있다.
// // N개의 회의를 진행한다고 할 때, 회의실을 사용가능한 최대 회의의 개수는?
// // 각 회의는 시작시간과 종료시간이 정의되어 있다.
// // 하나의 회의가 끝나자마자 다음 회의가 시작될 수 있다.
// // 끝나는 시간이 가장 빠른 순서대로 배치하면 최대 회의 개수로 배치할 수 있다.

// const INPUT_1 = [
//   "11",
//   "12 14",
//   "0 6",
//   "1 4",
//   "6 10",
//   "8 12",
//   "3 8",
//   "3 5",
//   "5 7",
//   "8 11",
//   "2 13",
//   "5 9",
// ];
// // expected output: 4
// const INPUT_2 = ["3", "0 1000", "998 1002", "1001 2000"]; // expected output: 2
// const INPUT_3 = [
//   "7",
//   "11 13",
//   "21 23",
//   "31 33",
//   "2 12",
//   "12 22",
//   "22 32",
//   "32 42",
// ];
// // expected output: 4
// const INPUT_4 = ["4", "1 4", "4 4", "4 4", "1 4"]; // expected output: 3
// const INPUT_5 = ["3", "3 3", "2 3", "1 2"]; // expected output: 3

// const input = INPUT_5;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const timeTable = input
//     .slice(1)
//     .map((e) => e.split(" ").map((e) => parseInt(e)))
//     .sort((a, b) => a[1] - b[1] || a[0] - b[0]);

//   // Functions
//   function solve() {
//     let meetingsCount = 0;
//     let prevEndTime = 0;
//     for (let i = 0; i < N; i++) {
//       const startTime = timeTable[i][0];
//       const endTime = timeTable[i][1];

//       if (prevEndTime <= startTime) {
//         prevEndTime = endTime;
//         meetingsCount++;
//       }
//     }

//     console.log(meetingsCount);
//   }

//   // Run
//   solve();
// }

// solution(input);
