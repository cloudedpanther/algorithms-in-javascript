// const INPUT_1 = ["4 2", "9 8 7 1"];

// const input = INPUT_1;

// function go(N, M, index, startNumber, numbers, chosen, answer) {
//   if (index === M) {
//     answer.push(chosen.join(" "));
//     return;
//   }

//   for (let i = startNumber; i < N; i++) {
//     const cur = numbers[i];
//     chosen.push(cur);
//     go(N, M, index + 1, i, numbers, chosen, answer);
//     chosen.pop();
//   }
// }

// const solution = (input) => {
//   const [N, M] = input[0].split(" ").map(Number);
//   const numbers = input[1]
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b);
//   const chosen = [];
//   const answer = [];
//   go(N, M, 0, 0, numbers, chosen, answer);
//   console.log(answer.join("\n"));
// };

// solution(input);
