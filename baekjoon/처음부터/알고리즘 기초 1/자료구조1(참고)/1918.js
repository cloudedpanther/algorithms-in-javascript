// const INPUT_1 = ["A*(B+C)"];
// const INPUT_2 = ["A+B*C-D/E"];
// const INPUT_3 = ["A+(B+C)*(D+E)"];
// const INPUT_4 = ["A+B"];

// const input = INPUT_3;

// const solution = (input) => {
//   const stack = [];
//   let suffix = "";
//   input[0].split("").forEach((e) => {
//     if ("A" <= e && e <= "Z") suffix += e;
//     else if (e === "(") stack.push(e);
//     else if (e === ")") {
//       while (stack.length && stack[stack.length - 1] !== "(")
//         suffix += stack.pop();
//       stack.pop();
//     } else if (e === "+" || e === "-") {
//       while (stack.length && stack[stack.length - 1] !== "(")
//         suffix += stack.pop();
//       stack.push(e);
//     } else if (e === "*" || e === "/") {
//       while (
//         stack.length &&
//         (stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/")
//       )
//         suffix += stack.pop();
//       stack.push(e);
//     }
//   });

//   while (stack.length) suffix += stack.pop();
//   console.log(suffix);
// };

// solution(input);
