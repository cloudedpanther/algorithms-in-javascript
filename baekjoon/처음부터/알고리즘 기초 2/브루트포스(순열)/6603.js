// const INPUT_1 = ["7 1 2 3 4 5 6 7", "8 1 2 3 5 8 13 21 34", "0"];

// const input = INPUT_1;

// function getCombinations(index, startNumber, numbers, K, seq, answer) {
//   if (index === 6) {
//     answer.push(seq.join(" "));
//     return;
//   }

//   for (let i = startNumber; i < K; i++) {
//     seq.push(numbers[i]);
//     getCombinations(index + 1, i + 1, numbers, K, seq, answer);
//     seq.pop();
//   }
// }

// const solution = (input) => {
//   const answer = [];
//   for (const cur of input.slice(0, -1)) {
//     const curIpt = cur.split(" ").map(Number);
//     const K = curIpt[0];
//     const numbers = curIpt.slice(1, K + 1);
//     const seq = [];
//     getCombinations(0, 0, numbers, K, seq, answer);
//     answer.push("");
//   }
//   answer.pop();
//   console.log(answer.join("\n"));
// };

// solution(input);
