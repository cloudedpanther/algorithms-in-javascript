// const INPUT_1 = ["9", "> < < < > > > < <"];
// const INPUT_2 = ["2", "< >"];

// const input = INPUT_1;

// // 0부터 9까지 정수 중 서로 다른 K개의 정수를 사용한 순열에 대해
// // 모든 경우의 순열을 만들어 본다
// // 완성된 각 순열에 대해 A를 만족하는지 확인한다
// // 만족하는 순열에 한해 정답에 추가한다

// const solution = (input) => {
//   const K = parseInt(input[0]);
//   const sign = input[1].split(" ");
//   const seq = new Set();
//   let min = "";
//   let max = "";

//   getPermutation(0);
//   console.log(max);
//   console.log(min);

//   function checkSequence() {
//     const number = [...seq];
//     for (let i = 0; i < K; i++) {
//       if (sign[i] === "<" && number[i] > number[i + 1]) return;
//       if (sign[i] === ">" && number[i] < number[i + 1]) return;
//     }

//     if (min === "") min = number.join("");
//     else max = number.join("");
//   }

//   function getPermutation(index) {
//     if (index === K + 1) {
//       checkSequence();
//       return;
//     }

//     for (let i = 0; i < 10; i++) {
//       if (!seq.has(i)) {
//         seq.add(i);
//         getPermutation(index + 1);
//         seq.delete(i);
//       }
//     }
//   }
// };

// solution(input);
