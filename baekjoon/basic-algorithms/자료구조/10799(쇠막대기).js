// const INPUT_1 = ["()(((()())(())()))(())"]; // 17
// const INPUT_2 = ["(((()(()()))(())()))(()())"]; // 24

// const input = INPUT_2;

// // Solution
// function solution(input) {
//   // Variables
//   const given = input[0].split("");
//   const stack = [];
//   let laser = true;
//   let bars = 0;

//   // Functions
//   function solve() {
//     for (let i = 0; i < given.length; i++) {
//       const cur = given[i];

//       if (cur === "(") {
//         stack.push(1);
//         laser = true;
//       } else {
//         stack.pop();
//         if (laser === true) bars += stack.length;
//         else bars++;
//         laser = false;
//       }
//     }

//     console.log(bars);
//   }

//   // Run
//   solve();
// }

// solution(input);
