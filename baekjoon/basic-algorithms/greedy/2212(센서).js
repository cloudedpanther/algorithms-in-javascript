// const INPUT_1 = ["6", "2", "1 6 9 3 6 7"]; // 5
// const INPUT_2 = ["2", "3", "1 2"]; // 1

// const input = INPUT_2;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]); // 센서의 개수
//   const K = parseInt(input[1]); // 집중국의 개수
//   const points = input[2]
//     .split(" ")
//     .map((e) => parseInt(e))
//     .sort((a, b) => a - b);

//   // Functions
//   function solve() {
//     const MAX_DISTANCE = points[points.length - 1] - points[0];
//     const distanceBySection = [];
//     let minSum = MAX_DISTANCE;

//     points.forEach((val, index, arr) => {
//       if (index > 0) {
//         distanceBySection.push(val - arr[index - 1]);
//       }
//     });

//     // for(let i = 0; i < N - 1; i++) {
//     //     distanceBySection.push(points[i + 1] - points[i]);
//     // }

//     distanceBySection.sort((a, b) => a - b);

//     for (let i = 1; i < K; i++) {
//       if (distanceBySection.length === 0) break;
//       minSum -= distanceBySection.pop();
//     }

//     console.log(minSum);
//   }

//   // Run
//   solve();
// }

// solution(input);
