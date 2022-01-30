// const INPUT_1 = ["<ab cd>ef gh<ij kl>"];

// const input = INPUT_1;

// const solution = (input) => {
//   let answer = "";
//   let inTag = false;
//   let stack = [];
//   for (const letter of input[0]) {
//     if (letter === "<") {
//       if (stack.length > 0) {
//         answer += stack.reverse().join("");
//         stack = [];
//       }
//       inTag = true;
//       answer += letter;
//     } else if (letter === ">") {
//       inTag = false;
//       answer += letter;
//     } else if (inTag === true) {
//       answer += letter;
//     } else {
//       if (letter === " ") {
//         answer += stack.reverse().join("") + letter;
//         stack = [];
//       } else {
//         stack.push(letter);
//       }
//     }
//   }
//   if (stack.length > 0) answer += stack.reverse().join("");
//   console.log(answer);
// };

// solution(input);
