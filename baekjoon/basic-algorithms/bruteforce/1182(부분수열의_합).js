// // N개의 정수로 이루어진 수열
// // 부분수열 중에서 합이 S인 수열의 개수를 반환해야 한다.
// // (이 문제 내에서 정의한) 부분수열이란 전체 수열에서 이웃한 수에 상관없이 임의의 수들을 골라내어 만든 수열을 의미한다.
// // 수열의 합을 구하는 것이기 때문에 순서는 상관없다. -> 조합으로 풀어야 한다.

// const INPUT_1 = ["5 0", "-7 -3 -2 5 8"]; // output: 1
// const INPUT_2 = ["3 1", "1 1 1"]; // output: 3

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0].split(" ")[0]);
//   const S = parseInt(input[0].split(" ")[1]);
//   const sequence = input[1].split(" ").map((e) => parseInt(e));
//   const combinations = [];

//   // Functions
//   function fillCombinations(value, index, flag) {
//     const sum = value + sequence[index];

//     if (flag === 1) {
//       combinations.push(value);
//     }

//     if (index < N) {
//       // 새로운 값을 더할 경우
//       fillCombinations(sum, index + 1, 1);

//       // 더하지 않을 경우
//       fillCombinations(value, index + 1, 0);
//     }
//   }

//   function solve() {
//     let answer = 0;

//     fillCombinations(0, 0, 0);
//     for (let i = 0; i < combinations.length; i++) {
//       if (combinations[i] === S) answer++;
//     }
//     console.log(answer);
//   }

//   // Run
//   solve();
// }

// solution(input);
