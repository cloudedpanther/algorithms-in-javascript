// const INPUT_1 = [
//   "6",
//   "(())())",
//   "(((()())()",
//   "(()())((()))",
//   "((()()(()))(((())))()",
//   "()()()()(()()())()",
//   "(()((())()(",
// ];
// // NO
// // NO
// // YES
// // NO
// // YES
// // NO
// const INPUT_2 = ["3", "((", "))", "())(()"];
// // NO
// // NO
// // NO

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);

//   // Functions
//   function isVPS(index) {
//     const seq = input[index].split("");
//     let cnt = 0;

//     for (let i = 0; i < seq.length; i++) {
//       if (seq[i] === "(") cnt++;
//       else cnt--;

//       if (cnt < 0) return "NO";
//     }
//     if (cnt !== 0) return "NO";
//     else return "YES";
//   }

//   function solve() {
//     // initialize variables
//     let answer = "";

//     // solve
//     for (let i = 1; i < N + 1; i++) {
//       answer += isVPS(i);
//       if (i < N) answer += "\n";
//     }
//     console.log(answer);
//   }

//   // Run
//   solve();
// }

// solution(input);
