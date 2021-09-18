// const INPUT_1 = ["3", "21 Junkyu", "21 Dohyun", "20 Sunyoung"];
// // 20 Sunyoung
// // 21 Junkyu
// // 21 Dohyun

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const members = [];
//   let answer = "";

//   // Functions
//   function solve() {
//     // initialize variables
//     for (let i = 1; i < N + 1; i++) {
//       const cur = input[i].split(" ");
//       const age = parseInt(cur[0]);
//       const name = cur[1];
//       members.push([age, i, name]);
//     }

//     // sort
//     members.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

//     // print
//     for (let i = 0; i < N; i++) {
//       answer += `${members[i][0]} ${members[i][2]}`;
//       if (i < N - 1) answer += "\n";
//     }

//     console.log(answer);
//   }

//   // Run
//   solve();
// }

// solution(input);
