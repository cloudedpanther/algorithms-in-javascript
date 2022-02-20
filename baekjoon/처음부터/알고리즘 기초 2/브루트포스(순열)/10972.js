// const INPUT_1 = ["4", "1 2 3 4"];
// const INPUT_2 = ["4", "4 3 2 1"];
// const INPUT_3 = ["5", "3 5 4 2 1"];

// const input = INPUT_3;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const seq = input[1].split(" ").map(Number);
//   const tail = [];
//   let headEnd = -1;
//   for (let i = N - 1; i > 0; i--) {
//     tail.push(seq[i]);
//     if (seq[i - 1] < seq[i]) {
//       headEnd = i - 1;
//       break;
//     }
//   }
//   if (headEnd === -1) {
//     console.log(headEnd);
//     return;
//   }

//   let answer = seq.slice(0, headEnd);
//   for (let i = 0; i < tail.length; i++) {
//     if (tail[i] > seq[headEnd]) {
//       answer.push(tail[i]);
//       tail[i] = seq[headEnd];
//       break;
//     }
//   }
//   answer = [...answer, ...tail];
//   console.log(answer.join(" "));
// };

// solution(input);
