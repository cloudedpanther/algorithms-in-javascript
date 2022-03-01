// const INPUT_1 = ["4", "-+0++++--+"];

// const input = INPUT_1;

// // 규현이는 -10 ~ 10의 정수만 안다
// // 덧셈을 할 수 있다
// // 종이에 N개의 숫자를 순서대로 썼다
// // 그 수열을 A라고 할 때, A[i]부터 A[j]까지의(i <= j) 합을 부호로 나타낸 것을 S[i][j]라 한다
// // S의 길이는 N*(N+1)/2다
// // N과 S가 주어질 때, A를 구하라

// // index에 따라 0에서 10까지 반복문을 돌린다
// // 각 숫자에 대해 부호를 붙이고 적절한지 확인한다

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const S = [];
//   for (let i = N, j = 0; i > 0; i--) {
//     S.push(input[1].slice(j, j + i).split(""));
//     j += i;
//   }
//   const answer = [];
//   findSequence(0);
//   console.log(answer.join(" "));

//   function isProper(index, number) {
//     if (index === 0) return true;

//     let sum = number;
//     for (let i = index - 1; i >= 0; i--) {
//       sum += answer[i];
//       if (S[i][index - i] === "+" && sum <= 0) return false;
//       if (S[i][index - i] === "-" && sum >= 0) return false;
//       if (S[i][index - i] === "0" && sum !== 0) return false;
//     }
//     return true;
//   }

//   function findSequence(index) {
//     if (index === N) return true;

//     if (S[index][0] === "0") {
//       answer.push(0);
//       if (findSequence(index + 1)) return true;
//       answer.pop();
//     } else {
//       for (let i = 1; i <= 10; i++) {
//         const number = S[index][0] === "+" ? i : i * -1;
//         if (isProper(index, number)) {
//           answer.push(number);
//           if (findSequence(index + 1)) return true;
//           answer.pop();
//         }
//       }
//     }
//     return false;
//   }
// };

// solution(input);
