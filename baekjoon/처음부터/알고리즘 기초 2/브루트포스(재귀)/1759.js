// const INPUT_1 = ["4 6", "a t c i s w"];

// const input = INPUT_1;

// function isProper(pw) {
//   let vowel = 0;
//   for (const letter of pw) {
//     if (
//       letter === "a" ||
//       letter === "e" ||
//       letter === "i" ||
//       letter === "o" ||
//       letter === "u"
//     )
//       vowel++;
//   }
//   return vowel > 0 && pw.length - vowel > 1 ? true : false;
// }

// function getEntries(L, C, index, startNumber, letters, pw, answer) {
//   if (index === L) {
//     if (isProper(pw)) {
//       answer.push(pw.join(""));
//     }
//     return;
//   }

//   for (let i = startNumber; i < C; i++) {
//     pw.push(letters[i]);
//     getEntries(L, C, index + 1, i + 1, letters, pw, answer);
//     pw.pop();
//   }
// }

// const solution = (input) => {
//   const [L, C] = input[0].split(" ").map(Number);
//   const letters = input[1].split(" ").sort();
//   const pw = [];
//   const answer = [];
//   getEntries(L, C, 0, 0, letters, pw, answer);
//   console.log(answer.join("\n"));
// };

// solution(input);
