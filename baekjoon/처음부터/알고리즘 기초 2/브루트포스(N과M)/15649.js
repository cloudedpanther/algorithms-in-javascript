// const INPUT_1 = ["4 4"];

// const input = INPUT_1;

// function go(N, M, index, chosen, answer) {
//   if (index === M) {
//     const seq = [...chosen].join(" ");
//     answer.push(seq);
//     return;
//   }

//   for (let i = 1; i <= N; i++) {
//     if (!chosen.has(i)) {
//       chosen.add(i);
//       go(N, M, index + 1, chosen, answer);
//       chosen.delete(i);
//     }
//   }
// }

// const solution = (input) => {
//   const [N, M] = input[0].split(" ").map(Number);
//   const answer = [];
//   const chosen = new Set();

//   go(N, M, 0, chosen, answer);
//   console.log(answer.join("\n"));
// };

// solution(input);
