// const INPUT_1 = ["2", "I am happy today ", "We want to win the first prize"];
// // I ma yppah yadot
// // eW tnaw ot niw eht tsrif ezirp

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const T = parseInt(input[0]);
//   const stack = [];
//   let answer = "";

//   // Functions
//   function emptyStack() {
//     while (stack.length !== 0) {
//       answer += stack.pop();
//     }
//   }

//   function solve() {
//     for (let i = 1; i < T + 1; i++) {
//       const sentence = input[i].split("");
//       for (let j = 0; j < sentence.length; j++) {
//         const letter = sentence[j];
//         if (letter === " ") {
//           emptyStack();
//           answer += letter;
//         } else stack.push(letter);
//       }
//       emptyStack();

//       if (i < T) answer += "\n";
//     }
//     console.log(answer);
//   }

//   // Run
//   solve();
// }

// solution(input);
