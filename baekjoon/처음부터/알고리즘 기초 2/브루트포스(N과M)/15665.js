// const INPUT_1 = ["4 2", "9 7 9 1"];

// const input = INPUT_1;

// function go(NN, M, index, numbers, chosen, answer) {
//   if (index === M) {
//     answer.push(chosen.join(" "));
//     return;
//   }

//   for (let i = 0; i < NN; i++) {
//     const cur = numbers[i];
//     chosen.push(cur);
//     go(NN, M, index + 1, numbers, chosen, answer);
//     chosen.pop();
//   }
// }

// const solution = (input) => {
//   const [N, M] = input[0].split(" ").map(Number);
//   const numbers = input[1]
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b)
//     .filter((val, idx, arr) => val !== arr[idx - 1]);
//   const chosen = [];
//   const answer = [];
//   const NN = numbers.length;
//   go(NN, M, 0, numbers, chosen, answer);
//   console.log(answer.join("\n"));
// };

// solution(input);
