// const INPUT_1 = ["abc", "9", "L", "L", "L", "L", "L", "P x", "L", "B", "P y"];

// const input = INPUT_1;

// const solution = (input) => {
//   const left = [];
//   const right = [];
//   input[0].split("").forEach((e) => left.push(e));
//   for (const [command, value] of input.slice(2).map((e) => e.split(" "))) {
//     switch (command) {
//       case "L":
//         if (left.length > 0) right.push(left.pop());
//         break;
//       case "D":
//         if (right.length > 0) left.push(right.pop());
//         break;
//       case "B":
//         if (left.length > 0) left.pop();
//         break;
//       case "P":
//         left.push(value);
//         break;
//     }
//   }
//   while (right.length > 0) {
//     left.push(right.pop());
//   }
//   console.log(left.join(""));
// };

// solution(input);
