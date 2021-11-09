// const INPUT_1 = ["4 2", "9 7 9 1"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const line = input[0].split(" ");
//   const N = parseInt(line[0]);
//   const M = parseInt(line[1]);
//   const num = input[1]
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b);
//   let selected = new Array(N).fill(false);
//   let seqSet = new Set();
//   let answer = "";

//   // Functions
//   const print = () => {
//     const seqArr = [];
//     for (let i = 0; i < N; i++) {
//       if (selected[i]) seqArr.push(num[i]);
//     }
//     const seq = seqArr.join(" ");
//     if (!seqSet.has(seq)) seqSet.add(seq);
//     return;
//   };

//   const go = (index, level) => {
//     if (level === M) {
//       print();
//       return;
//     } else {
//       if (index === N) return;
//       else {
//         selected[index] = true;
//         go(index + 1, level + 1);
//         selected[index] = false;
//         go(index + 1, level);
//       }
//     }
//   };

//   const solve = () => {
//     go(0, 0);
//     const seq = [...seqSet];
//     for (let i = 0; i < seq.length; i++) {
//       answer += seq[i];
//       if (i < seq.length - 1) answer += "\n";
//     }
//     console.log(answer);
//   };

//   // Run
//   solve();
// };

// solution(input);
