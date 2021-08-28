// const INPUT_1 = ["4 4 8", "3", "0 10", "1 10", "2 1"];
// const INPUT_2 = [
//   "1000000 1000000 1000000",
//   "5",
//   "0 1000000",
//   "1 1000000",
//   "2 1000000",
//   "3 1000000",
//   "4 1000000",
// ];

// const input = INPUT_2;

// // Solution
// function solution(input) {
//   // Variables
//   const box = input[0].split(" ");
//   const length = parseInt(box[0]);
//   const width = parseInt(box[1]);
//   const height = parseInt(box[2]);

//   const N = parseInt(input[1]); // 가진 큐브의 종류
//   const CUBE_LENGTH_LIMIT = 20; // 0 <= i < 20
//   const cubes = new Array(CUBE_LENGTH_LIMIT).fill(0);

//   let cubesUsed = 0;
//   let fullFilled = 1;

//   // Functions
//   function fillBox(currentLength, currentWidth, currentHeight) {
//     if (currentLength * currentWidth * currentHeight === 0) return;

//     for (let i = cubes.length - 1; i >= 0; i--) {
//       const cubeSize = Math.pow(2, i);
//       const minLength = Math.min(currentLength, currentWidth, currentHeight);

//       if (cubes[i] !== 0 && cubeSize <= minLength) {
//         cubes[i]--;
//         cubesUsed++;

//         fillBox(currentLength, currentWidth, currentHeight - cubeSize);
//         fillBox(currentLength - cubeSize, cubeSize, cubeSize);
//         fillBox(currentLength, currentWidth - cubeSize, cubeSize);

//         return;
//       }
//     }

//     fullFilled = 0;
//   }

//   function solve() {
//     // cubes initialize
//     for (let i = 2; i < N + 2; i++) {
//       const cubeType = parseInt(input[i].split(" ")[0]);
//       const cubeReserve = parseInt(input[i].split(" ")[1]);

//       cubes[cubeType] = cubeReserve;
//     }

//     fillBox(length, width, height);

//     if (fullFilled === 0) cubesUsed = -1;
//     console.log(cubesUsed);
//   }

//   // Run
//   solve();
// }

// solution(input);
