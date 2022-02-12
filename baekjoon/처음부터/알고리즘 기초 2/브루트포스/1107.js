// const INPUT_1 = ["5457", "3", "6 7 8"];
// const INPUT_2 = ["1", "3", "1 2 3"];

// const input = INPUT_2;

// function getDistance(broken, N, num) {
//   let buttons = Math.abs(N - num);
//   if (num === 0) {
//     if (broken[0]) return Infinity;
//     else return ++buttons;
//   }
//   while (num > 0) {
//     if (broken[num % 10]) return Infinity;
//     num = Math.floor(num / 10);
//     buttons++;
//   }
//   return buttons;
// }

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const M = parseInt(input[1]);
//   let broken = new Array(10).fill(false);
//   if (M > 0) {
//     input[2].split(" ").forEach((n) => (broken[parseInt(n)] = true));
//   }
//   let answer = Math.abs(N - 100);

//   for (let i = 0; i <= N + Math.abs(N - 100); i++) {
//     answer = Math.min(answer, getDistance(broken, N, i));
//   }

//   console.log(answer);
// };

// solution(input);
