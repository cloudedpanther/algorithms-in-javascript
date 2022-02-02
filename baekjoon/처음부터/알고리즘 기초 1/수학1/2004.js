// const INPUT_1 = ["25 12"];

// const input = INPUT_1;

// function getFives(num) {
//   let fives = 0;
//   for (let i = 5; i <= num; i *= 5) {
//     fives += Math.floor(num / i);
//   }
//   return fives;
// }

// function getTwos(num) {
//   let twos = 0;
//   for (let i = 2; i <= num; i *= 2) {
//     twos += Math.floor(num / i);
//   }
//   return twos;
// }

// const solution = (input) => {
//   const [n, m] = input[0].split(" ").map(Number);
//   const fives = getFives(n) - getFives(m) - getFives(n - m);
//   const twos = getTwos(n) - getTwos(m) - getTwos(n - m);

//   console.log(fives >= twos ? twos : fives);
// };

// solution(input);
