// const INPUT_1 = ["4 4 8", "3", "0 10", "1 10", "2 1"];
// const INPUT_2 = ["4 4 4", "2", "0 8", "1 7"];
// const INPUT_3 = ["2 3 3", "2", "0 10", "1 10"];

// const input = INPUT_3;

// // Solution
// function solution(input) {
//   // Variables
//   const box = input[0].split(" ");
//   const initialLength = parseInt(box[0]);
//   const initialWidth = parseInt(box[1]);
//   const initialHeight = parseInt(box[2]);

//   const N = parseInt(input[1]); // 가지고 있는 큐브의 가짓수
//   const CUBE_LENGTH_LIMIT = 20; // 0 <= i < 20
//   const cubes = new Array(CUBE_LENGTH_LIMIT).fill(0);

//   let emptySpaces = [];
//   emptySpaces.push([initialLength, initialWidth, initialHeight]);

//   let checkedSpaces = 0;
//   let cubesUsed = 0;

//   // Functions
//   function solve() {
//     // cubes initialize
//     for (let i = 2; i < N + 2; i++) {
//       const cubeType = parseInt(input[i].split(" ")[0]);
//       const cubeReserve = parseInt(input[i].split(" ")[1]);

//       cubes[cubeType] = cubeReserve;
//     }

//     // fill the box
//     while (emptySpaces.length !== 0) {
//       const currentSpace = emptySpaces.shift();
//       const currentLength = currentSpace[0];
//       const currentWidth = currentSpace[1];
//       const currentHeight = currentSpace[2];
//       const minLength = Math.min(currentLength, currentWidth, currentHeight);

//       if (minLength === 0) continue;

//       checkedSpaces++;

//       for (let i = cubes.length - 1; i >= 0; i--) {
//         const cubeLength = Math.pow(2, i);

//         if (cubes[i] !== 0 && cubeLength <= minLength) {
//           cubesUsed++;
//           cubes[i]--;

//           emptySpaces.push([
//             currentLength,
//             currentWidth,
//             currentHeight - cubeLength,
//           ]);
//           emptySpaces.push([
//             currentLength - cubeLength,
//             cubeLength,
//             cubeLength,
//           ]);
//           emptySpaces.push([
//             currentLength,
//             currentWidth - cubeLength,
//             cubeLength,
//           ]);
//           break;
//         }
//       }
//     }

//     // answer
//     if (cubesUsed === checkedSpaces) console.log(cubesUsed);
//     else console.log(-1);
//   }

//   // Run
//   solve();
// }

// solution(input);
