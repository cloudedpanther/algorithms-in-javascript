// const INPUT_1 = ["4 2", "9 7 9 1"];

// const input = INPUT_1;

// function go(M, index, startNumber, numbers, chosen, answer) {
//   if (index === M) {
//     answer.push(chosen.join(" "));
//     return;
//   }

//   for (const [num, quan] of numbers) {
//     if (num >= startNumber && quan > 0) {
//       numbers.set(num, quan - 1);
//       chosen.push(num);
//       go(M, index + 1, num, numbers, chosen, answer);
//       chosen.pop();
//       numbers.set(num, quan);
//     }
//   }
// }

// const solution = (input) => {
//   const [_, M] = input[0].split(" ").map(Number);
//   const numbers = new Map();
//   input[1]
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b)
//     .forEach((num) => {
//       numbers.set(num, (numbers.get(num) ?? 0) + 1);
//     });
//   const chosen = [];
//   const answer = [];
//   go(M, 0, 0, numbers, chosen, answer);
//   console.log(answer.join("\n"));
// };

// solution(input);
