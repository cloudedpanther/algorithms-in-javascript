// const INPUT_1 = ["4 2"];

// const input = INPUT_1;

// function go(N, M, index, startNumber, chosen, answer) {
//   if (index === M) {
//     answer.push([...chosen].join(" "));
//     return;
//   }

//   for (let i = startNumber; i <= N; i++) {
//     chosen.push(i);
//     go(N, M, index + 1, i, chosen, answer);
//     chosen.pop();
//   }
// }

// const solution = (input) => {
//   const [N, M] = input[0].split(" ").map(Number);
//   const answer = [];
//   const chosen = [];
//   go(N, M, 0, 1, chosen, answer);
//   console.log(answer.join("\n"));
// };

// solution(input);
