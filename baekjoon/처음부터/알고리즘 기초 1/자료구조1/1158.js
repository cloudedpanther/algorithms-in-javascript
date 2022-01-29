// const INPUT_1 = ["7 3"];

// const input = INPUT_1;

// const solution = (input) => {
//   const [N, K] = input[0].split(" ").map(Number);
//   const answer = [];
//   const queue = [];
//   for (let i = 1; i < N + 1; i++) {
//     queue.push(i);
//   }
//   while (queue.length > 0) {
//     for (let i = 0; i < K - 1; i++) {
//       queue.push(queue.shift());
//     }
//     answer.push(queue.shift());
//   }

//   console.log(`<${answer.join(", ")}>`);
// };

// solution(input);
