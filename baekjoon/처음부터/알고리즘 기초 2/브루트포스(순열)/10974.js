// const INPUT_1 = ["3"];

// const input = INPUT_1;

// // 1부터 N까지의 수를 활용하여 만들 수 있는 모든 길이가 N인 수열 제출

// // 각각 한 번씩만 사용 가능하므로 Set을 사용
// // 재귀함수를 사용해서 index마다 1부터 N까지 반복문
// // Set에 포함되어 있지 않으면 해당 index에 추가
// // 그 다음 index에 대해 재귀함수 실행
// // Set에서 넣었던 수를 빼고 다음 수로
// // 마지막 index에 다다르면 수열을 만들어서 보관

// function makeSeq(N, index, seq, answer) {
//   if (index === N) {
//     answer.push([...seq].join(" "));
//     return;
//   }

//   for (let i = 1; i <= N; i++) {
//     if (!seq.has(i)) {
//       seq.add(i);
//       makeSeq(N, index + 1, seq, answer);
//       seq.delete(i);
//     }
//   }
// }

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const seq = new Set();
//   const answer = [];
//   makeSeq(N, 0, seq, answer);
//   console.log(answer.join("\n"));
// };

// solution(input);
