// const INPUT_1 = ["7", "1 1 2 3 4 2 1"];

// const input = INPUT_1;

// const solution = (input) => {
//   let frequency = [];
//   const stack = [];
//   const answer = [];
//   const numbers = input[1].split(" ").map(Number);
//   numbers.forEach((num) => (frequency[num] = frequency[num] + 1 || 1));
//   numbers.reverse().forEach((num) => {
//     while (stack.length > 0) {
//       const top = stack[stack.length - 1];
//       if (frequency[num] < frequency[top]) {
//         answer.push(top);
//         break;
//       } else stack.pop();
//     }
//     if (stack.length === 0) answer.push(-1);
//     stack.push(num);
//   });
//   console.log(answer.reverse().join(" "));
// };

// solution(input);
