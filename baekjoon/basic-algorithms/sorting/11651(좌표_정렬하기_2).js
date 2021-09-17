// const INPUT_1 = ["5", "0 4", "1 2", "1 -1", "2 2", "3 3"];
// // 1 -1
// // 1 2
// // 2 2
// // 3 3
// // 0 4

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const coors = [];
//   let answer = "";

//   // Functions
//   function solve() {
//     // initialize variables
//     for (let i = 1; i < N + 1; i++) {
//       const cur = input[i].split(" ");
//       const curX = parseInt(cur[0]);
//       const curY = parseInt(cur[1]);
//       coors.push([curX, curY]);
//     }

//     // sort
//     coors.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

//     // print
//     for (let i = 0; i < N; i++) {
//       answer += `${coors[i][0]} ${coors[i][1]}`;
//       if (i < N + 1) answer += "\n";
//     }

//     console.log(answer);
//   }

//   // Run
//   solve();
// }

// solution(input);
