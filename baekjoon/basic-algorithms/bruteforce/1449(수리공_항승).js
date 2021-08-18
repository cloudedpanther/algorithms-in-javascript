// // 길이가 L인 테이프를 임의의 개수 사용해 물이 새는 파이프를 막으려 한다.
// // 물은 시작점을 기준으로 정수만큼 떨어진 곳에서만 샌다.
// // 물이 새는 곳의 좌우 0.5만큼은 간격을 줘야 한다.

// const INPUT_1 = ["4 2", "1 2 100 101"]; // expected output: 2
// const INPUT_2 = ["4 2", "1 2 3 4"]; // expected output: 2
// const INPUT_3 = ["4 3", "1 2 3 4"]; // expected output: 2

// const input = INPUT_3;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0].split(" ")[0]);
//   const L = parseInt(input[0].split(" ")[1]);
//   const leaking = input[1]
//     .split(" ")
//     .map((e) => parseInt(e))
//     .sort((a, b) => a - b);

//   // Functions
//   function solve() {
//     let lastTaped = 0; // 마지막으로 붙인 테이프가 끝나는 지점
//     let usedTapes = 0; // 사용한 테이프의 개수

//     for (let i = 0; i < leaking.length; i++) {
//       const currentPoint = leaking[i];
//       if (lastTaped < currentPoint) {
//         usedTapes++;
//         lastTaped = currentPoint + L - 1;
//       }
//     }

//     console.log(usedTapes);
//   }

//   // Run
//   solve();
// }

// solution(input);
