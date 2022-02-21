// const INPUT_1 = ["5", "5 4 3 2 1"];

// const input = INPUT_1;

// // 뒤에서부터 검색해서 처음으로 앞의 수가 더 큰 지점을 찾는다
// // 그 보다 큰 수를 기점으로(breakPoint) 수열이 머리와 꼬리로 나뉜다
// // 머리는 그대로 둔다
// // 꼬리에서 breakPoint 보다 작은 수 중 가장 큰 수를 찾는다
// // 두 수의 위치를 뒤바꾼다
// // 오름차순으로 정렬되어 있던 꼬리를 뒤집어 내림차순으로 바꾸어준다.
// // 다시 머리와 breakPoint, 꼬리를 합친다

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const seq = input[1].split(" ").map(Number);
//   let head = -1;
//   const tail = [];
//   let breakPoint = -1;

//   // breakPoint 검색
//   for (let i = N - 1; i > 0; i--) {
//     tail.push(seq[i]);
//     if (seq[i - 1] > seq[i]) {
//       breakPoint = seq[i - 1];
//       head = seq.slice(0, i - 1);
//       break;
//     }
//   }

//   // 이전 수열이 있는지 검사
//   if (breakPoint === -1) {
//     console.log(-1);
//     return;
//   }

//   // swap with new breakPoint
//   for (let i = 0; i < tail.length; i++) {
//     if (tail[i] < breakPoint) {
//       const tmp = breakPoint;
//       breakPoint = tail[i];
//       tail[i] = tmp;
//       break;
//     }
//   }

//   const newSeq = [...head, breakPoint, ...tail];
//   console.log(newSeq.join(" "));
// };

// solution(input);
