// const INPUT_1 = ["4 6", "a t c i s w"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const line = input[0].split(" ");
//   const L = parseInt(line[0]);
//   const C = parseInt(line[1]);
//   const alphabet = input[1]
//     .split(" ")
//     .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
//   const V = ["a", "e", "i", "o", "u"];
//   let pw = new Array(L);
//   let answer = "";

//   // Functions
//   const go = (index, vowel, conso, start) => {
//     if (index === L) {
//       if (vowel > 0 && conso > 1) {
//         answer += pw.join("") + "\n";
//       }
//       return;
//     } else if (C - start < L - index) {
//       return;
//     } else {
//       for (let i = start; i < C; i++) {
//         const cur = alphabet[i];
//         pw[index] = cur;
//         if (V.includes(cur)) go(index + 1, vowel + 1, conso, i + 1);
//         else go(index + 1, vowel, conso + 1, i + 1);
//       }
//       return;
//     }
//   };

//   const solve = () => {
//     go(0, 0, 0, 0);
//     console.log(answer.trim());
//   };

//   // Run
//   solve();
// };

// solution(input);
